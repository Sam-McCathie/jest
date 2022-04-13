const axios = require("axios");

const fetchData = async (id) => {
  const results = await axios.get(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  console.log(results);
  return results.data;
};

it("mock axios", async () => {
  //mock axios get method
  jest.spyOn(axios, "get").mockReturnValueOnce({
    data: {
      id: 1,
      todo: "get good at this",
    },
  });

  const res = await fetchData();

  expect(res.todo).toBe("get good at this");
});
