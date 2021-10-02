// tslint:disable:max-classes-per-file
import { BuiltinClass } from '../src';

@BuiltinClass()
class E1 extends Error {}
class E2 extends E1 {}

it('nested', () => {
  expect(new E2() instanceof E2).toBe(true);
  expect(new E2() instanceof E1).toBe(true);
  expect(new E2() instanceof Error).toBe(true);
});
