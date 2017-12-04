import { Ships } from '../../src/app/map/map';
import { Ship } from '../../src/app/autoplacement/ship';

describe('', () => {
  const ships = new Ships();
  const ship3 = new Ship(3);
  const ship4 = new Ship(4);
  const ship2 = new Ship(2);
  const ship5 = new Ship(5);

  it('should init with empty list', () => {
    expect(ships.get().length).toBe(0);
  });

  it('should add ships', () => {
    expect(ships.get().length).toBe(0);
    ships.add(ship2);
    expect(ships.get().length).toBe(1);
    ships.add(ship3);
    expect(ships.get().length).toBe(2);
    ships.add(ship4);
    expect(ships.get().length).toBe(3);
    ships.remove(ship2);
    expect(ships.get().length).toBe(2);
    ships.remove(ship2);
    expect(ships.get().length).toBe(2);

  });

  it('should remove ships', () => {
    ships.remove(ship2);
    expect(ships.get().length).toBe(2);
    ships.remove(ship2);
    expect(ships.get().length).toBe(2);

  });

});
