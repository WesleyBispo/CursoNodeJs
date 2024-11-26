import { getCustomRepository } from "typeorm";
import { Product } from "../typeorm/entities/Product";
import ProductsRepository from "../typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";
import { Constants } from "@shared/constants/Constants";

export default class CreateProductService {
  async execute({ name, price, quantity }: ICreateProductRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository)
    const productExists = await productsRepository.findByName(name);
    if (productExists) {
      throw new AppError(Constants.ErrorMessages.ProductAlreadyExists, Constants.HttpStatusCode.Conflict);
    }

    const newProduct = productsRepository.create({
      name,
      price,
      quantity,
    })

    await productsRepository.save(newProduct);

    return newProduct;
  }
}
