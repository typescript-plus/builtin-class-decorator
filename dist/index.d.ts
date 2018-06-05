export declare const UNNEEDED: boolean;
export declare type AbstractConstructorType = Function & {
    prototype: any;
};
export interface ConcreteConstructorType {
    new (...args: any[]): {};
}
export declare type ConstructorType = AbstractConstructorType | ConcreteConstructorType;
export declare const BuiltinClass: () => <T extends ConstructorType>(constructor: T) => T;
