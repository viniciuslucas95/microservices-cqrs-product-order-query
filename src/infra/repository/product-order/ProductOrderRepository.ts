import RepositoryBase from '../shared/RepositoryBase';
import IProductOrderRepository from '../../../application/order-product/IProductOrderRepository';
import ProductOrderModel from './ProductOrderModel';
import VerifyProductOrderDto from '../../../application/order-product/verify/VerifyProductOrderDto';

export default class ProductOrderRepository
  extends RepositoryBase
  implements IProductOrderRepository
{
  public override readonly name = 'product_orders';

  public async verify(id: string) {
    const results = await this.query<ProductOrderModel>(
      `SELECT status FROM "${this.name}" WHERE id = $1`,
      [id],
    );

    const item = results[0];

    return item ? new VerifyProductOrderDto(item.status) : undefined;
  }
}
