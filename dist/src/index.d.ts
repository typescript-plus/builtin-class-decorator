export declare function BuiltinClass(): <T extends new (...args: any[]) => {}>(constructor: T) => {
    new (...args: any[]): {};
} & T;
