import { MyBaseClass, CommonParams } from './lib';
import { SumInterface, SumClass } from './lib/sum';
import { MultiplyInterface, MultiplyClass } from './lib/multiply';

export interface MyInterface extends SumInterface, MultiplyInterface {
}

export default class MyClass extends MyBaseClass implements MyInterface {
  sum: () => number;
  multiply: () => number;

  constructor(obj: CommonParams) {
    super(obj);
    this.sum = SumClass.prototype.sum.bind(this);
    this.multiply = MultiplyClass.prototype.multiply.bind(this);
  }
}
