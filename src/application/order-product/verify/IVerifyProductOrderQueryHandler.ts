import ICommandQueryHandler from '../../shared/ICommandQueryHandler';
import VerifyProductOrderQuery from './VerifyProductOrderQuery';
import VerifyProductOrderDto from './VerifyProductOrderDto';

export default interface IVerifyProductOrderQueryHandler
  extends ICommandQueryHandler<
    VerifyProductOrderQuery,
    VerifyProductOrderDto
  > {}
