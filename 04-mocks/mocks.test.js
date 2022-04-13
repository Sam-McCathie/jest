const forEach = (items, callback) => {
  for (let i = 0; i < items.length; i++) {
    callback(items[i]);
  }
};

it("mock callback", () => {
  // jest.fn() creates a mock callback
  const mockCallback = jest.fn((x) => 42 + x);

  forEach([0, 1], mockCallback);

  // each callback using a mock callback has a mock property.
  // - this property contains the data associated with the callback
  // - calls returns an array of all the calls
  expect(mockCallback.mock.calls.length).toBe(2);
  // [0][0] -> accessing the first call and the first argument of the call
  expect(mockCallback.mock.calls[0][0]).toBe(0);
  expect(mockCallback.mock.calls[1][0]).toBe(1);
  // result of first call
  expect(mockCallback.mock.results[0].value).toBe(42);
  expect(mockCallback.mock.results[1].value).toBe(43);
});

it("mock return", () => {
  const mock = jest.fn();

  // assign the return value to true
  mock
    .mockReturnValueOnce(true) // first call
    .mockReturnValueOnce(false) // second call
    .mockReturnValueOnce("hello"); // third call

  const results = mock();
  const results2 = mock();
  const results3 = mock();

  expect(results).toBe(true);
  expect(results2).toBe(false);
  expect(results3).toBe("hello");
});
