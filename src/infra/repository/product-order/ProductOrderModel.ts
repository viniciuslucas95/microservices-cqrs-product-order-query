import ModelBase from '../shared/ModelBase';

export default class ProductOrderModel extends ModelBase {
  status!: 'approved' | 'refused' | 'requested';
}
