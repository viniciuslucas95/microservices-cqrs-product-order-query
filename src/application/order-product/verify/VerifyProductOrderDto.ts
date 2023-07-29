export default class VerifyProductOrderDto {
  constructor(public readonly status: 'approved' | 'refused' | 'requested') {}
}
