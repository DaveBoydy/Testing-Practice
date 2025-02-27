import Calculator from "../src/calculator";

test("3 add 4 equals 7", () => {
  expect(Calculator(3, 4).add()).toEqual(7);
});

test("3 add 4 to NOT equal 6", () => {
  expect(Calculator(3, 4).add()).not.toEqual(6);
});

test("3 add -4 equals -1", () => {
  expect(Calculator(3, -4).add()).toEqual(-1);
});

test("0.1 add 0.2 equals 0.3", () => {
  expect(Calculator(0.1, 0.2).add()).toBeCloseTo(0.3);
});

test("NaN add 4 equals NaN", () => {
  expect(Calculator(NaN, 4).add()).toBe(NaN);
});

test("3 add NaN equals NaN", () => {
  expect(Calculator(3, NaN).add()).toBe(NaN);
});

test("3 subtract 4 equals -1", () => {
  expect(Calculator(3, 4).subtract()).toEqual(-1);
});

test("3 subtract -4 equals 7", () => {
  expect(Calculator(3, -4).subtract()).toEqual(7);
});

test("0.1 subtract 0.2 equals -0.1", () => {
  expect(Calculator(0.1, 0.2).subtract()).toBeCloseTo(-0.1);
});

test("3 divide 4 equals 0.75", () => {
  expect(Calculator(3, 4).divide()).toEqual(0.75);
});

test("3 divide -4 equals -0.75", () => {
  expect(Calculator(3, -4).divide()).toEqual(-0.75);
});

test("-3 divide -4 equals 0.75", () => {
  expect(Calculator(-3, -4).divide()).toEqual(0.75);
});

test("3 multiply 4 equals 12", () => {
  expect(Calculator(3, 4).multiply()).toEqual(12);
});

test("-3 multiply -4 equals 12", () => {
  expect(Calculator(-3, -4).multiply()).toEqual(12);
});
