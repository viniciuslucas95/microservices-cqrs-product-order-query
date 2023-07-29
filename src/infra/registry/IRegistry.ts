import ILogger from '../logger/ILogger';
import ISwagger from '../swagger/ISwagger';
import IProductOrderController from '../../api/product-order/IProductOrderController';
import IProductOrderRepository from '../../application/order-product/IProductOrderRepository';
import IVerifyProductOrderQueryHandler from '../../application/order-product/verify/IVerifyProductOrderQueryHandler';

export type Registries = {
  logger: ILogger;
  swagger: ISwagger;
  productOrderController: IProductOrderController;
  productOrderRepository: IProductOrderRepository;
  verifyProductOrderQueryHandler: IVerifyProductOrderQueryHandler;
};

export default interface IRegistry {
  get<K extends keyof Registries>(registry: K): Registries[K];
}
