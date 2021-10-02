import { Es5BuiltinClass, Es6BuiltinClass } from '../../src';
import { TARGET } from '../helper';

const BuiltinClass = TARGET == 'es5' ? Es5BuiltinClass : Es6BuiltinClass;

@BuiltinClass()
class SpecialError extends Error {
  constructor() {
    super();
  }
}

describe('README - Usage', () => {
  it('works', () => {
    const error = new SpecialError();
    expect(error instanceof Error).toBe(true);
    expect(error instanceof SpecialError).toBe(true);
  });
});
