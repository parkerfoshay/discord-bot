const fetch = require("node-fetch");

const getapi = async (url) => {

  const response = await fetch(url);

  let data = await response.json();

  return data;
};

module.exports = {getapi};