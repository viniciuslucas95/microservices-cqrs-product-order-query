import VerifyProductOrderDto from './verify/VerifyProductOrderDto';

export default interface IProductOrderRepository {
  verify(id: string): Promise<VerifyProductOrderDto | undefined>;
}
