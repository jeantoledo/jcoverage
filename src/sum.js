export const sum = (a, b) => a + b;

export const sub = (a, b) => a - b;

export const mult = (a, b) => a * b;

export const div = (a, b) => a / b;

export const isOdd = (a) => a % 2 !== 0;

export const total = (a, b) => a + b;

export const isTrue = (a) => Boolean(a);

export const isFalse = (a) => Boolean(a) === false && haveLength("a");

export const haveLength = (a) => test(a);

export const test = (a) => a.length;
