import { Ships } from '../../src/app/map/map';
import { Ship } from '../../src/app/autoplacement/ship';

describe('', () => {
  const shipList = [new Ship(3), new Ship(4), new Ship(3, 1, 1), new Ship(5)];
  const length = shipList.length;

  it('should init with empty list', () => {
    const ships = new Ships();
    expect(ships.get().length).toBe(0);
  });

  it('should add ships', () => {
    const ships = new Ships();

    expect(ships.get().length).toBe(0);
    ships.add(shipList[0]);
    expect(ships.get().length).toBe(1);
    ships.add(shipList[1]);
    expect(ships.get().length).toBe(2);
    ships.add(shipList[2]);
    expect(ships.get().length).toBe(3);
    ships.add(shipList[3]);
    expect(ships.get().length).toBe(4);
  });

  it('should set ships', () => {
    const ships = new Ships();

    expect(ships.get().length).toBe(0);
    ships.set(shipList);
    expect(ships.get().length).toBe(shipList.length);
  });

  it('should remove ships', () => {
    const ships = new Ships();

    ships.set(shipList);
    expect(ships.get().length).toBe(length);
    ships.remove(new Ship(3));
    expect(ships.get().length).toBe(length - 1);
    ships.remove(new Ship(4));
    expect(ships.get().length).toBe(length - 2);
  });

  it('should not remove not existing ships', () => {
    const ships = new Ships();

    ships.set(shipList);
    expect(ships.get().length).toBe(length);
    ships.remove(new Ship(2));
    expect(ships.get().length).toBe(length);
    ships.remove(new Ship(4, 1, 1));
    expect(ships.get().length).toBe(length);
  });

  it('should not remove from the original array', () => {
    const ships = new Ships();

    ships.set(shipList);
    expect(ships.get().length).toBe(length);
    ships.remove(new Ship(3));
    expect(ships.get().length).toBe(length - 1);
    expect(shipList.length).toBe(length);
  });

});
