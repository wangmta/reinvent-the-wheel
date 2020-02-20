export const classCollection = {};

// class decorator
export function registerClass(constructor) {
  const className = constructor.name;
  const fullName = `class-${className}`;
  classCollection[fullName] = new constructor();
}
