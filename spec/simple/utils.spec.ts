import { Utils } from '../../src/app/autoplacement/utils';

describe('sum', () => {
  it('empty arr', () => {
    expect(Utils.sum([])).toBe(0);
  });
  it('random arr', () => {
    expect(Utils.sum([3, 1, 5])).toBe(9);
  });
});

