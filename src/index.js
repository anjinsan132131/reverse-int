module.exports = function reverse (n) {
  if (n < 0) {
    n = n * -1; 
  } else {
    n = n;
  };
  return +(n.toString().split('').reverse().join(''));
}