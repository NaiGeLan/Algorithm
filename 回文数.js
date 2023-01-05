/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const str = x.toString().split('').reverse().join('');
  return x.toString() === str;
};
const res = isPalindrome(121)
console.log(res);
