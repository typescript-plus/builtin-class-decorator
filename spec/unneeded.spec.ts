import { UNNEEDED } from '../src';

class E extends Error {}
const EXPECTED = new E() instanceof E;

it('UNNEEDED', () => {
  expect(UNNEEDED).toBe(EXPECTED);
});
