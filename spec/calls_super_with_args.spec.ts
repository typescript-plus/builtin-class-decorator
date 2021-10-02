import { Es5BuiltinClass, Es6BuiltinClass } from '../src';
import { TARGET } from './helper';

const BuiltinClass = TARGET == 'es5' ? Es5BuiltinClass : Es6BuiltinClass;

@BuiltinClass()
class SpecialError extends Error {
  constructor(message: string) {
    super(message);
  }
}

it('Calls super() with args.', () => {
  const error = new SpecialError('message');
  expect(error.message).toEqual('message');
});
