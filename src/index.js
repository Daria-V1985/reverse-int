module.exports = function reverse (n) {
  let result = 0;

  while(n != 0 || n < 0) {
    result = (result * 10) + (n % 10);
    n = Math.floor(Math.abs(n) / 10);
    
  }
  return result;
}
