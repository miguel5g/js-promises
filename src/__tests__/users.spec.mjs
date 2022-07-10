import { getUser, getUserCallback } from '../user.mjs';

beforeEach(() => {
  // console.log('Before');
});

describe('getUser', () => {
  it('should return an object', async () => {
    const result = await getUser('miguel5g');

    expect(result).toBeInstanceOf(Object);
    expect(result).not.toBeInstanceOf(Promise);
  });

  it('should return an object', async () => {
    const result = await getUser('miguel5g');

    expect(result).toBeInstanceOf(Object);
  });

  it('should return an object', (done) => {
    getUser('miguel5g').then((data) => {
      try {
        expect(data).toBeInstanceOf(Object);
        done();
      } catch (error) {
        done(error);
      }
    });
  });

  it('should return an object', (done) => {
    getUserCallback('miguel5g', (data) => {
      try {
        expect(data).toBeInstanceOf(Object);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});
