enum one {
  A = 1,
  B = 2,
  C = 3,
  D = 4,
  E = 5,
  F = 6,
}

type T = one.A | one.B | one.C | one.D | one.E | one.F;

type stringAsNumbers = one<T>;

it('should return a number when passing a string', () => {
  function doSomenthing(a: T) {
    return a;
  }

  const res = doSomenthing();

  expect(res).toBe(1);
});
