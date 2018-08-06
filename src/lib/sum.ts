import MyBaseClass from './index';

// export default class SumClass extends MyBaseClass {
//   sum() {
//     return this.A + this.B;
//   }
// }

export default (base: MyBaseClass): number => {
  return base.A + base.B;
};
