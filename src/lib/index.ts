export interface CommonParams {
  paramA: number,
  paramB: number,
}

export default class MyBaseClass {
  A: number;
  B: number;

  constructor(obj: CommonParams) {
    this.A = obj.paramA;
    this.B = obj.paramB;
  }
}
