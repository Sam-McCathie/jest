const sum = require("./sum");

// THE below is an Jest Expect matchers overview.
// more here -> https://jestjs.io/docs/expect

// test file.
// must share the same file name as the file being tested with .test added
// tests exist inside of a test block
// tests use the keyword "test" or "it"

// describe us used to group together tests
describe("grouping first test", () => {
  // it("what is being tested", callback)
  it("should add 1 + 2 to = 3", () => {
    // call function from sum file
    const result = sum(1, 2);
    // expected result
    // - toBe = is a matcher
    expect(result).toBe(3);
  });

  it("object assignment", () => {
    const obj = {};
    // toEqual is used when comparing objects or arrays
    expect(obj).toEqual({});
  });
});

/* evalutes to falsy:
    false, 0, -0, 0n, "", '', ``, null, undefined, NaN, document.all

*/
describe("truthly or falsy", () => {
  it("should be falsy", () => {
    const n = null;
    expect(n).toBeFalsy();
    // only ever have one expect inside of a test block
    expect(n).not.toBeTruthy(); // if you are wanting to test the opposite result you can add .not
    expect(n).toBeNull(); // to be more specific you can define the result
  });

  it("should be truthy", () => {
    const x = 5;
    expect(x).toBeTruthy();
  });
});

describe("numbers", () => {
  it("two plus two", () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);
  });

  it("adding floats", () => {
    const value = 0.1 + 0.2;
    expect(value).toBeCloseTo(0.299999999);
  });
});

describe("strings", () => {
  it("there is no I in team", () => {
    expect("team").not.toMatch(/I/);
  });
});

describe("arrays", () => {
  it("should contain carrots", () => {
    const shoppingList = ["carrots", "cat food", "eggs"];
    expect(shoppingList).toContain("carrots");
  });
});

const niceError = () => {
  throw new Error("you found me");
};

describe("exceptions", () => {
  it("should throw an error", () => {
    expect(() => niceError()).toThrow();
    expect(() => niceError()).toThrow(Error);
  });
  it("should throw specific error", () => {
    expect(() => niceError()).toThrow("you found me");
  });
});
