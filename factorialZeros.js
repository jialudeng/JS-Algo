/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0;
  while (n > 0) {
      n = Math.floor(n / 5);
      count += n;
  }
  return count;
}


trailingZeroes(25)