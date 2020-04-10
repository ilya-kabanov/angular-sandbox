import * as fromCore from './core.actions';

describe('setCores', () => {
  it('should return an action', () => {
    expect(fromCore.setTokens(null).type).toBe('[Core] Set tokens');
  });
});
