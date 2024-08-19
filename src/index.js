module.exports = reverse = (n) => 
  n >= 0
  ? +`${n}`.split('').reverse().join('')
  : +(`${-n}`.split('').reverse().join(''));
