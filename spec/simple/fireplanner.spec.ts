import { SHIPFOUNDER, FirePlanner } from '../../src/app/battle/fireplanner';

describe('shipfounder regexp', () => {
  it('should not find anything', () => {
    expect('00000'.match(SHIPFOUNDER)).toBeNull();
    expect('11111'.match(SHIPFOUNDER)).toBeNull();
    expect('02000'.match(SHIPFOUNDER)).toEqual(['020']);
  });
  it('Should find between walls simple ships', () => {
    expect('02000'.match(SHIPFOUNDER)).toEqual(['020']);
    expect('00200'.match(SHIPFOUNDER)).toEqual(['020']);
    expect('00020'.match(SHIPFOUNDER)).toEqual(['020']);
  });
  it('Should find at walls simple ships', () => {
    expect('2000'.match(SHIPFOUNDER)).toEqual(['20']);
    expect('0002'.match(SHIPFOUNDER)).toEqual(['02']);
  });
  it('Should find between misses simple ships', () => {
    expect('12000'.match(SHIPFOUNDER)).toEqual(['120']);
    expect('00021'.match(SHIPFOUNDER)).toEqual(['021']);
    expect('00210'.match(SHIPFOUNDER)).toEqual(['021']);
    expect('01200'.match(SHIPFOUNDER)).toEqual(['120']);
  });
  it('Should find more ships', () => {
    expect('0220220'.match(SHIPFOUNDER)).toEqual(['0220', '220']);
    expect('2212220'.match(SHIPFOUNDER)).toEqual(['12220']);
    expect('0202020'.match(SHIPFOUNDER)).toEqual(['020', '20', '20']);
  });
});

describe('getTheLengthiestShipFromLine', () => {
  const fp = new FirePlanner();
  const ls = fp.getTheLengthiestShipFromLine.bind(fp, 0, 0);
  it('should return impossible ship', () => {
    expect(ls('00000').ship).toBe('');
  });
  it('should return the max ship', () => {
    expect(ls('0202220').ship).toBe('02220');
    expect(ls('0201220').ship).toBe('1220');
  });
  it('should avoid lengthiest sunk ship', () => {
    expect(ls('020122').ship).toBe('020');
    expect(ls('020122122222').ship).toBe('020');
  });
});

describe('getTheLengthiestShipFromRows', () => {
  const fp = new FirePlanner(2, 6);
  const ls = fp.getLengthiestShipFromRows.bind(fp);
  const m1 = [[0, 2, 2, 2, 0, 0], [1, 2, 2, 2, 2, 1]];
  const m2 = [[0, 2, 2, 2, 0, 0], [0, 0, 2, 2, 0, 0]];
  it('should return 222', () => {
    expect(ls(m1, 0).ship).toBe('02220');
    expect(ls(m2, 0).ship).toBe('02220');
  });
});
