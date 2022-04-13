let fruits;

// beforeAll, beforeEach, afterEach, afterAll can be added outside of a describe block.
// but, this would be run for all tests in the file not just the tests you would like it to run for.

//
describe("fruits array", () => {
  // runs at the very start of running tests
  beforeAll(() => {
    console.log("before all");
    fruits = ["apple", "strawberry", "grape"];
  });

  // before each test run the below code
  beforeEach(() => {
    console.log("before each");
  });

  // tear down -> runs after each test
  afterEach(() => {
    console.log("after each");
    fruits = ["apple", "strawberry", "grape"];
  });

  // after all tests are run, run this
  afterAll(() => {
    console.log("after all");
  });

  // .only will skip other tests and just run this one
  it.only("should add fruit to end of array", () => {
    fruits.push("apple");
    expect(fruits[fruits.length - 1]).toBe("apple");
  });

  // .only can be added to more than one.. not sure if this is good practice though?
  it.only("should add fruit to start of an array", () => {
    fruits.unshift("banana");
    expect(fruits[0]).toBe("banana");
  });

  it("should have a length of 3", () => {
    expect(fruits.length).toBe(3);
  });
});
