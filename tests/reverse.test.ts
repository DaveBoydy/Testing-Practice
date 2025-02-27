import reverseString from "../src/reverse";

test("'multiple word test' becomes 'tset drow elpitlum'", () => {
  expect(reverseString("multiple word test")).toBe("tset drow elpitlum");
});

test("'tset drow elpitlum' becomes 'multiple word test'", () => {
  expect(reverseString("tset drow elpitlum")).toBe("multiple word test");
});

test("'12345' becomes '54321'", () => {
  expect(reverseString("12345")).toBe("54321");
});

test("'!@£$%' becomes '%$£@!'", () => {
  expect(reverseString("!@£$%")).toBe("%$£@!");
});
