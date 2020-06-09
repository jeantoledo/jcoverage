import {
  sum,
  sub,
  mult,
  div,
  isOdd,
  total,
  isTrue,
  isFalse,
  haveLength,
} from "./sum";

test("sum", () => {
  // expect(true).toEqual(true);
  expect(sum(2, 2)).toEqual(4);
});

test("sub", () => {
  // expect(true).toEqual(true);
  expect(sub(2, 2)).toEqual(0);
});

test("mult", () => {
  // expect(true).toEqual(true);
  expect(mult(2, 2)).toEqual(4);
});

test("div", () => {
  // expect(true).toEqual(true);
  expect(div(2, 2)).toEqual(1);
});

test("isOdd", () => {
  // expect(true).toEqual(true);
  expect(isOdd(3)).toEqual(true);
});

test("total", () => {
  // expect(true).toEqual(true);
  expect(total(2, 2)).toEqual(4);
});

test("isTrue", () => {
  // expect(true).toEqual(true);
  expect(isTrue(true)).toEqual(true);
});

test("isFalse", () => {
  // expect(true).toEqual(true);
  expect(isFalse(true)).toEqual(false);
});
