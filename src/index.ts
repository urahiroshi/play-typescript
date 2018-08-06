import MyBaseClass from './lib';
import sum from './lib/sum';
import multiply from './lib/multiply';

export default class MyClass extends MyBaseClass {
  sum(): number {
    return sum(this);
  }

  multiply(): number {
    return multiply(this);
  }
}

// export class AbstractClass {
//   sum: () => number;
//   multiply: () => number;
// }

// export default class MyClass extends AbstractClass {
// }

// MyClass.prototype.sum = function () {
//   return sum(this);
// }
