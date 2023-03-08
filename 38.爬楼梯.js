/**
 * LeetCode 70
 * 
 */


/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
//   if(n === 0) return 0
//   else if(n === 1) return 1
//   else if(n === 2) return 2
//   return  climbStairs(n-1) + climbStairs(n-2)
// };

var climbStairs = function(n) {
  let left = 0 
  let right = 0
  let sum = 1
  for(let i = 0; i < n; i++) {
    left = right
    right = sum 
    sum = left + right
  }
  return sum
};

const res = climbStairs(45)
console.log(res);
