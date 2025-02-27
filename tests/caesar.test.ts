import caesarCipher from "../src/caesar";

test("xyz becomes abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("HeLLo becomes KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Hello, World! becomes Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
