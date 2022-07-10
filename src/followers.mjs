import fetch from 'node-fetch';
// const fetch = require('node-fetch);

const BASE_URL = 'https://api.github.com';

function getFollowersCallback(login, callback) {
  const url = `${BASE_URL}/users/${login}/followers`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
}

async function getFollowers(login) {
  const url = `${BASE_URL}/users/${login}/followers`;

  // Utilizando then e await juntos
  const data = await fetch(url).then((response) => response.json());

  // const response = await fetch(url);
  // const data = await response.json();

  return data;
}

export { getFollowers, getFollowersCallback };
