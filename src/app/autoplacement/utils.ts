export class Utils {
  public static getNumbersFromZero(n: number) {
    return Array(n).fill(0).map(Function.call, Number);
  }

  // Durstenfeld, Fisher and Yates
  public static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // https://stackoverflow.com/questions/4492678/swap-rows-with-columns-transposition-of-a-matrix-in-javascript
  public static transpose(a) {
    return Object.keys(a[0]).map(function(c) {
        return a.map(function(r) { return r[c]; });
    });
  }

  public static sum(arr: number[]): number {
      return arr.reduce(function(prev, curr) { return prev + curr; }, 0);
  }
}
