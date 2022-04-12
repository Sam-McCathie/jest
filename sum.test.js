const sum = require("./sum");

// test file.
// must share the same file name as the file being tested with .test added
// tests exist inside of a test block
// tests use the keyword "test" or "it"

// it("what is being tested", callback)
it("should add 1 + 2 to = 3", () => {
  // call function from sum file
  const result = sum(1, 2);
  // expected result
  // - toBe = is a matcher
  expect(result).toBe(3);
});
