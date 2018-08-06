import { MyBaseClass, MyInterface } from './index';

export interface MultiplyInterface extends MyInterface {
  multiply: () => number;
}

export class MultiplyClass extends MyBaseClass implements MultiplyInterface {
  multiply(): number {
    return this.A * this.B;
  }
}
