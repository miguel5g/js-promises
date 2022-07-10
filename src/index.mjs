import fetch from 'node-fetch';

import { getFollowers, getFollowersCallback } from './followers.mjs';
import { getUser, getUserCallback } from './user.mjs';
import { getUserRepos } from './repos.mjs';

async function main() {
  /* Fluxo de execução */
  // const login = 'miguel5g';
  // console.log('1 - Await');
  // console.log(await getUser(login));
  // console.log('2 - Then');
  // getUser(login).then((data) => console.log(data));
  // console.log('3 - Callback');
  // getUserCallback(login, (data) => console.log(data));
  // console.log('4 - Fim');
  /* Desestruturando um retorno de api */
  // const { bio, id, login, name } = await fetch('https://api.github.com/users/miguel5g').then(
  //   (response) => response.json
  // );
  // const result = {
  //   bio,
  //   id,
  //   login,
  //   name,
  // };
  // console.log(result);
}

main();
