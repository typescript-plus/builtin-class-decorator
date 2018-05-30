# Builtin Class Decorator

A TypeScript class decorator for extending builtin classes in ES5.

## Install

```bash
$ npm i @typescript-plus/builtin-class-decorator --save
```

## Summary

When the compile target is `es5`, to correctly extend the builtin classes, such as Array, Map and Error, you need to do this [workaround](https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work).

With Builtin Class Decorator, you can simply do it.

## Usage

```ts
import { BuiltinClass } from '@typescript-plus/-class-decorator';

@BuiltinClass()
class SpecialError extends Error {
  constructor() {
    super();
  }
}

const error = new SpecialError();
error instanceof Error; // true
error instanceof SpecialError; // true
```
