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
  loginTest() {
    console.log("login successful Business");
  }
}

@registerClass
class Supermaket extends Business {
  constructor() {
    super();
  }

  @protect
  loginTest() {
    console.log("login successful Supermarket");
  }

  @override
  anyMethod() {
    // console.log(this.constructor.name);
  }
}

// console.log(classCollection);
// console.log(protectedMethods);
// classCollection["class-Business"].print();
// classCollection["class-Supermaket"].anyMethod();
classCollection["class-Business"].loginTest({ token: "random" });
classCollection["class-Supermaket"].loginTest({ token: "123" });
