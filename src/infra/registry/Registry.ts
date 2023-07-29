import { Pool } from 'pg';

import Logger from '../logger/Logger';
import IRegistry, { Registries } from './IRegistry';
import Swagger from '../swagger/Swagger';
import ProductOrderController from '../../api/product-order/ProductOrderController';
import ProductOrderRepository from '../repository/product-order/ProductOrderRepository';
import VerifyProductOrderQueryHandler from '../../application/order-product/verify/VerifyProductOrderQueryHandler';

export default class Registry implements IRegistry {
  private readonly _singletons: Registries;

  constructor(
    apiPort = 3002,
    databaseHost = 'localhost',
    databasePort = 5435,
    databaseUsername = 'admin',
    databasePassword = 'admin',
    databaseName = 'dev',
  ) {
    this._singletons = {
      logger: new Logger(),
      swagger: new Swagger(apiPort),
      productOrderController: new ProductOrderController(this),
      productOrderRepository: new ProductOrderRepository(
        new Pool({
          host: databaseHost,
          port: databasePort,
          user: databaseUsername,
          password: databasePassword,
          database: databaseName,
        }),
      ),
      verifyProductOrderQueryHandler: new VerifyProductOrderQueryHandler(this),
    };
  }

  get<K extends keyof typeof this._singletons>(registry: K) {
    return this._singletons[registry] as (typeof this._singletons)[K];
  }
}
