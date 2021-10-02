class E extends Error {}
export const UNNEEDED = new E() instanceof E;

// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
export type AbstractConstructorType = Function & { prototype: any };
// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
export type ConcreteConstructorType = new (...args: any[]) => {};
export type ConstructorType = AbstractConstructorType | ConcreteConstructorType;

export function BuiltinClass() {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function <T extends ConstructorType>(constructor: T) {
    if (UNNEEDED) {
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
