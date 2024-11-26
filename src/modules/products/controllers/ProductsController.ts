import { Request, Response } from "express";
import { Product } from "../typeorm/entities/Product";
import ListProductService from "../services/ListProductService";
import ShowProductService from "../services/ShowProductService";
import CreateProductService from "../services/CreateProductService";
import UpdateProductService from "../services/UpdateProductService";
import { Constants } from "@shared/constants/Constants";
import DeleteProductService from "../services/DeleteProductService";

export default class ProductsController {
  async index(req: Request, res: Response): Promise<Response> {
    const listProducts = new ListProductService()
    const products = await listProducts.execute()

    return res.status(Constants.HttpStatusCode.Success).json(products)
  }

  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const showProduct = new ShowProductService()
    const product = await showProduct.execute(id)

    return res.status(Constants.HttpStatusCode.Success).json(product)
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, price, quantity } = req.body;

    const createProduct = new CreateProductService()
    const product = await createProduct.execute({ name, price, quantity })

    return res.status(Constants.HttpStatusCode.Created).json(product)
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    const updateProduct = new UpdateProductService()
    const product = await updateProduct.execute({ id, name, price, quantity })

    return res.status(Constants.HttpStatusCode.Success).json(product)
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const deleteProduct = new DeleteProductService();

    await deleteProduct.execute(id);

    return res.status(Constants.HttpStatusCode.NoContent).send();
  }

}
