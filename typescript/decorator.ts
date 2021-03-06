export const classCollection = {};
export const protectedMethods = [];

// class decorator
export function registerClass(constructor) {
  const className = constructor.name;
  const fullName = `class-${className}`;
  classCollection[fullName] = new constructor();
}

// method decorator
export function protect(target, property, descriptor) {
  const className = target.constructor.name;
  protectedMethods.push(
    `${className}.${property}.${JSON.stringify(descriptor)}`
  );

  const orignalFunction = descriptor.value;

  descriptor.value = function(request) {
    try {
      if (request.token !== "random") throw new Error("Not Authorized");
      const bindedOriginalFunction = orignalFunction.bind(this);
      const result = bindedOriginalFunction(request);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return descriptor;
}

export function override(target, property, descriptor) {
  descriptor.value = function() {
    console.log("override");
  };
  return descriptor;
}

const changeProp = (target) => {
  return class extends target {
    prop1 = "test new prop 1";
  };
};

const changeFn = (
  target: Object,
  propKey: string,
  descriptor: PropertyDescriptor
) => {
  console.log(target);
  console.log(propKey);
  descriptor.value = () => {
    return "changed fn text";
  };
};

@changeProp
class Test {
  prop1 = "old prop 1";

  @changeFn
  testFn() {}
}

let test = new Test();
console.log(test.prop1); // test new prop 1
console.log(test.testFn()); // changed fn text
