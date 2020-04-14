import * as fromAuth from './auth.actions';

describe('loadAuths', () => {
  it('should return an action', () => {
    expect(fromAuth.login(null).type).toBe('[Auth] Login');
  });
});
