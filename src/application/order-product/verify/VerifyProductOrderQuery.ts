import { IsString, IsUUID } from 'class-validator';

export default class VerifyProductOrderQuery {
  @IsString()
  @IsUUID()
  orderId!: string;
}
