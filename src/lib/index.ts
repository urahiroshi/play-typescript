export interface CommonParams {
  paramA: number,
  paramB: number,
}

export interface MyInterface {
  A: number;
  B: number;
}

export class MyBaseClass implements MyInterface {
  A: number;
  B: number;

  constructor(obj: CommonParams) {
    this.A = obj.paramA;
    this.B = obj.paramB;
  }
}
