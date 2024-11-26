import { getCustomRepository } from "typeorm";
import ProductsRepository from "../typeorm/repositories/ProductsRepository";
import { Product } from "../typeorm/entities/Product";

export default class ListProductService {
  async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductsRepository);
    return await productsRepository.find();
  }
}
