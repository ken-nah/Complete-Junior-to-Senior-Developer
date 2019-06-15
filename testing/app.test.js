const googleSearch = require("./app");

dbMock = [
  "dog.com",
  "mcdonalds.com",
  "dogsarehumanfriends.com",
  "cats.com",
  "humanlovesdog.com"
];

describe("googleSearch", () => {
  it("is a dummy test", () => {
    expect("hello").toBe("hello");
  });

  it("google search is working", () => {
    expect(googleSearch("dog", dbMock)).toEqual([
      "dog.com",
      "dogsarehumanfriends.com",
      "humanlovesdog.com"
    ]);
    expect(googleSearch("testtest", dbMock)).toEqual([]);
  });

  it("works with undefined and null", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 values", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
