import { EntityRepository, Repository } from "typeorm"
import { Product } from "../entities/Product"

@EntityRepository(Product)
export default class ProductsRepository extends Repository<Product> {
  async findByName(name: string): Promise<Product | null> {
    const product = await this.findOne({
      where: { name }
    })
    if (!product) return null
    return product
  }
}
