const fetch = require("node-fetch");
const { getPeople } = require("./app2");

it("gets people from swapi using async/await", () => {
  expect.assertions(1);
  return getPeople(fetch).then(data => {
    expect(data.count).toEqual(87);
  });
});
