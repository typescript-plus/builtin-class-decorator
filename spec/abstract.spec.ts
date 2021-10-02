import { Es5BuiltinClass, Es6BuiltinClass } from '../src';
import { TARGET } from './helper';

const BuiltinClass = TARGET == 'es5' ? Es5BuiltinClass : Es6BuiltinClass;

@BuiltinClass()
abstract class Abstract extends Error {}
class Concreate extends Abstract {}

it('abstract', () => {
  expect(new Concreate() instanceof Concreate).toBe(true);
  expect(new Concreate() instanceof Abstract).toBe(true);
  expect(new Concreate() instanceof Error).toBe(true);
});
