// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
type AbstractConstructorType = Function & { prototype: any };
// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
type ConcreteConstructorType = new (...args: any[]) => {};
type ConstructorType = AbstractConstructorType | ConcreteConstructorType;

class E extends Error {}
const NOT_NEEDED = new E() instanceof E;

export function BuiltinClass() {
  return function <T extends ConstructorType>(constructor: T): T {
    if (NOT_NEEDED) {
      return constructor;
    }
    return class extends (constructor as ConcreteConstructorType) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      constructor(...args: any[]) {
        super(...args);
        Object.setPrototypeOf(this, new.target.prototype);
      }
    } as T;
  };
}
