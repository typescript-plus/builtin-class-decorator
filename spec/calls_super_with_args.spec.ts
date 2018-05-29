import { BuiltinClass } from '../src';

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
