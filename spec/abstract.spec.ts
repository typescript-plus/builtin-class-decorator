// tslint:disable:max-classes-per-file
import { BuiltinClass } from '../src';

@BuiltinClass() abstract class Abstract extends Error {}
class Concreate extends Abstract {}

it("nested", () => {
  expect(new Concreate() instanceof Concreate).toBe(true);
  expect(new Concreate() instanceof Abstract).toBe(true);
  expect(new Concreate() instanceof Error).toBe(true);
});
