import fetch from 'node-fetch';
// const fetch = require('node-fetch);

const BASE_URL = 'https://api.github.com/users/';

function getUserCallback(login, callback) {
  const url = `${BASE_URL}/users/${login}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data));
}

async function getUser(login) {
  const url = `${BASE_URL}${login}`;

  // Utilizando then e await juntos
  // const data = await fetch(url).then((response) => response.json());

  const response = await fetch(url);
  const data = await response.json().catch((error) => console.log(error));

  return data;
}

export { getUser, getUserCallback };
