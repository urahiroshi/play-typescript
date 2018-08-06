import { MyBaseClass, MyInterface } from './index';

export interface SumInterface extends MyInterface {
  sum: () => number;
}

export class SumClass extends MyBaseClass implements SumInterface {
  sum(): number {
    return this.A * this.B;
  }
}
