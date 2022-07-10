import fetch from 'node-fetch';

// https://api.github.com/users/miguel5g/repos

async function getUserRepos(username) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  const userRepo = await response.json();

  return userRepo;
}

async function main() {
  console.log(await getUserRepos('dannOut'));
}

// main();

export { getUserRepos };

// module.exports = { getUserRepos };
