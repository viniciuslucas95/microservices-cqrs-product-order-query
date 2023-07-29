import { Request, Response } from 'express';

export default interface IProductOrderController {
  verify(req: Request, res: Response): Promise<void>;
}
