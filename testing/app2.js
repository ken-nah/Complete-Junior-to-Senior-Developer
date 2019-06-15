const fetch = require("node-fetch");

const getPeoplePromise = fetch => {
  fetch("https://swapi.co/api/people")
    .then(result => result.json())
    .then(data => {
      return {
        count: data.count,
        result: data.result
      };
    });
};

const getPeople = async fetch => {
  const result = await fetch("https://swapi.co/api/people");
  const data = await result.json();

  return {
    count: data.count,
    result: data.result
  };
};

module.exports = {
  getPeople,
  getPeoplePromise
};
