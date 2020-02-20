import { registerClass, classCollection } from "./decorator";

@registerClass
class Business {
  print() {
    console.log(this.constructor.name);
  }
}

@registerClass
class Supermaket extends Business {
  constructor() {
    super();
  }
}

console.log(classCollection);

console.log("hello there");
