import MyBaseClass from './index';

// export default class MultiplyClass extends MyBaseClass {
//   multiply() {
//     return this.A * this.B;
//   }
// }

export default (base: MyBaseClass): number => {
  return base.A * base.B;
};
