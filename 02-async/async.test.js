const fetchData = require("./async");

// to run just this test instead of all tests
// npm run test async

it("async -> should return correct todo", async () => {
  const todo = await fetchData(1);
  expect(todo.id).toBe(1);
});

it(".then -> should return correct todo", () => {
  fetchData(2).then((todo) => {
    expect(todo.id).toBe(2);
  });
});
