import { getCustomRepository } from "typeorm";
import { Product } from "../typeorm/entities/Product";
import ProductsRepository from "../typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";
import { Constants } from "@shared/constants/Constants";

interface IUpdateProductRequest {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default class UpdateProductService {
  async execute({ id, name, price, quantity }: IUpdateProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    const product = await productsRepository.findOne(id);
    if (!product) {
      throw new AppError(Constants.ErrorMessages.ProductNotFound, Constants.HttpStatusCode.NotFound);
    }

    const productExists = await productsRepository.findByName(name);
    if (productExists && productExists.id !== id) {
      throw new AppError(Constants.ErrorMessages.ProductAlreadyExists, Constants.HttpStatusCode.BadRequest);
    }

    product.name = name;
    product.price = price;
    product.quantity = quantity;

    await productsRepository.save(product);

    return product;
  }
}
