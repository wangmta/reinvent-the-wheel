import {
  registerClass,
  classCollection,
  protect,
  protectedMethods,
  override
} from "./decorator";

@registerClass
class Business {
  print() {
    console.log(this.constructor.name);
  }

  @protect
  testProtectedMethod() {}
}

@registerClass
class Supermaket extends Business {
  constructor() {
    super();
  }

  @protect
  superTest() {}

  @override
  anyMethod() {
    // console.log(this.constructor.name);
  }
}

// console.log(classCollection);
// console.log(protectedMethods);
// console.log(classCollection["class-Business"].print());
console.log(classCollection["class-Supermaket"].anyMethod());
