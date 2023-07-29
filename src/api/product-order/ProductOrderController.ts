import { Request, Response } from 'express';

import ControllerBase from '../shared/ControllerBase';
import IProductOrderController from './IProductOrderController';
import CommandQueryBase from '../../application/shared/CommandQueryBase';
import VerifyProductOrderQuery from '../../application/order-product/verify/VerifyProductOrderQuery';

export default class ProductOrderController
  extends ControllerBase
  implements IProductOrderController
{
  async verify(req: Request, res: Response) {
    const service = this.registry.get('verifyProductOrderQueryHandler');
    const data = CommandQueryBase.create(VerifyProductOrderQuery, req.body);
    const dto = await service.handle(data);

    res.status(201).send(dto);
  }
}
