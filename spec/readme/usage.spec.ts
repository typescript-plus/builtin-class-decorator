import { BuiltinClass } from '../../src';

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
