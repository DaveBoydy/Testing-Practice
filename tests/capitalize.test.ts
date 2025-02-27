import capitalizeFirstLetter from "../src/capitalize";

test("strings first character becomes upper case", () => {
  expect(capitalizeFirstLetter("multiple word test")).toBe(
    "Multiple word test"
  );
});

test("strings first character remains upper case", () => {
  expect(capitalizeFirstLetter("Multiple word test")).toBe(
    "Multiple word test"
  );
});

test("string characters remain upper case", () => {
  expect(capitalizeFirstLetter("MULTIPLE WORD TEST")).toBe(
    "MULTIPLE WORD TEST"
  );
});

test("string digital characters remain unchanged", () => {
  expect(capitalizeFirstLetter("12345")).toBe("12345");
});

test("non alpha-numeric string characters remain unchanged", () => {
  expect(capitalizeFirstLetter("@£#∞^¶*!")).toBe("@£#∞^¶*!");
});
