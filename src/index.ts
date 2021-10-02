// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
type AbstractConstructorType = Function & { prototype: any };
// eslint-disable-next-line @typescript-eslint/ban-types,@typescript-eslint/no-explicit-any
type ConcreteConstructorType = new (...args: any[]) => {};
type ConstructorType = AbstractConstructorType | ConcreteConstructorType;

type BuiltinClassType = () => <T extends ConstructorType>(constructor: T) => T;

class Target {
  constructor(private _builtinClass?: BuiltinClassType) {}

  isSupported() {
    return !!this._builtinClass;
  }

  get builtinClass() {
    return this.isSupported()
      ? (this._builtinClass as BuiltinClassType)
      : function () {
          return function <T extends ConstructorType>(constructor: T): T {
            return constructor;
          };
        };
  }
}

function loadTarget(target: string) {
  try {
    //eslint-disable-next-line @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-member-access
    return new Target(require(`./${target}`).BuiltinClass as BuiltinClassType);
  } catch (e) {
    if (e instanceof SyntaxError) {
      return new Target();
    }
    throw e;
  }
}

const es5 = loadTarget('es5');
const es6 = loadTarget('es6');

export const Es5BuiltinClass = es5.builtinClass;
export const Es6BuiltinClass = es6.builtinClass;
export const ES6_SUPPORTED = es6.isSupported();
