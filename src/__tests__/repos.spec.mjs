import { getUserRepos } from '../repos.mjs';

describe('getUserRepos', () => {
  it('se a função está definida', () => {
    expect(getUserRepos).toBeDefined();
  });

  it('se o retorno é um objeto', async () => {
    expect.assertions(3);

    const expected = await getUserRepos('dannOut');

    expect(typeof expected).toBe('object');
    expect(Array.isArray(expected)).toBeTruthy();
    expect(expected).toBeInstanceOf(Array);
  });
});
