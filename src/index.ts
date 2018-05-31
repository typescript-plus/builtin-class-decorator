class E extends Error {}
export const UNNEEDED = new E() instanceof E;

export function BuiltinClass() {
  // tslint:disable-next-line:arrow-return-shorthand
  return <T extends {new(...args: any[]): {}}>(constructor: T) => {
    return UNNEEDED ? constructor : class extends constructor {
      constructor(...args: any[]) {
        // tslint:disable-next-line:no-inferred-empty-object-type
        super(...args);
        // tslint:disable-next-line:no-unsafe-any
        Object.setPrototypeOf(this, new.target.prototype);
      }
    };
  };
}
