import CommandQueryHandlerBase from '../../shared/CommandQueryHandlerBase';
import IVerifyProductOrderQueryHandler from './IVerifyProductOrderQueryHandler';
import VerifyProductOrderQuery from './VerifyProductOrderQuery';
import VerifyProductOrderDto from './VerifyProductOrderDto';
import NotFoundException from '../../../domain/exceptions/NotFoundException';

export default class VerifyProductOrderQueryHandler
  extends CommandQueryHandlerBase
  implements IVerifyProductOrderQueryHandler
{
  async handle(data: VerifyProductOrderQuery): Promise<VerifyProductOrderDto> {
    const repository = this.registry.get('productOrderRepository');

    const dto = await repository.verify(data.orderId);

    if (!dto) throw new NotFoundException('Product order');

    return dto;
  }
}
