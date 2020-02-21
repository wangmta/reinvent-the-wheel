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
    if (request.token !== "random") throw new Error("Not Authorized");
    const bindedOriginalFunction = orignalFunction.bind(this);
    const result = bindedOriginalFunction(request);
    return result;
  };

  return descriptor;
}

export function override(target, property, descriptor) {
  descriptor.value = function() {
    console.log("override");
  };
  return descriptor;
}
