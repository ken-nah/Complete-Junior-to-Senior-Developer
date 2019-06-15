const googleDatabase = [
  "cats.com",
  "dogs.com",
  "catsarefunny.com",
  "whydogsaregood.com",
  "ilovedogs.com",
  "animals.com",
  "dogsareamazing.com"
];

const googleSearch = (searchResult,db) => {
  const matches = db.filter(website =>
    website.includes(searchResult)
  );

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = googleSearch;
