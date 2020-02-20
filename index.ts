// import { registerClass, classCollection } from "./decorator";

const classCollection = {};

function registerClass(constructor) {
  const className = constructor.name;
  const fullName = `class-${className}`;
  classCollection[fullName] = new constructor();
}

@registerClass
class Business {
  print() {
    console.log(this.constructor.name);
  }
}

// @registerClass
// class Supermaket extends Business {
//   constructor() {
//     super();
//   }
// }
@registerClass
class Supermaket {}

console.log(classCollection);

console.log("hello there");
