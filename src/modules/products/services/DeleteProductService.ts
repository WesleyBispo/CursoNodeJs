import { getCustomRepository } from "typeorm";
import { Product } from "../typeorm/entities/Product";
import ProductsRepository from "../typeorm/repositories/ProductsRepository";
import AppError from "@shared/errors/AppError";
import { Constants } from "@shared/constants/Constants";

export default class DeleteProductService {
  async execute(id: string): Promise<void> {
    const productRepository = getCustomRepository(ProductsRepository)
    const product = await productRepository.findOne(id);

    if (!product) throw new AppError(Constants.ErrorMessages.ProductNotFound, Constants.HttpStatusCode.NotFound)

    await productRepository.delete(id);
  }
}
