class E extends Error {}
export const UNNEEDED = new E() instanceof E;

// tslint:disable-next-line:ban-types
export type AbstractConstructorType = Function & { prototype: any };
export interface ConcreteConstructorType {
  new (...args: any[]): {};
}
export type ConstructorType = AbstractConstructorType | ConcreteConstructorType;

// tslint:disable-next-line:variable-name
export const BuiltinClass = () => {
  // tslint:disable-next-line:arrow-return-shorthand
  return <T extends ConstructorType>(constructor: T) => {
    const concrete = constructor as ConcreteConstructorType;
    return UNNEEDED
      ? constructor
      : // tslint:disable-next-line:max-classes-per-file
        (class extends concrete {
          constructor(...args: any[]) {
            // tslint:disable-next-line:no-inferred-empty-object-type
            super(...args);
            // tslint:disable-next-line:no-unsafe-any
            Object.setPrototypeOf(this, new.target.prototype);
          }
        } as T);
  };
};
