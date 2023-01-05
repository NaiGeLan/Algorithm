/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// var removeElement = function(nums, val) {
//   const length = nums.length
//   for (var i = 0; i < length; i++) {
//     if(nums[i] === val) {
//       nums.splice(i, 1);
//       i--
//     } 
//   }
//   return nums.length;
// };
var removeElement = function(nums, val) {
  const n = nums.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
      if (nums[right] !== val) {
          nums[left] = nums[right];
          left++;
      }
  }
  return left;
};

const arr = [0,1,2,2,3,0,4,2]
const val = 2
const res = removeElement(arr,val)
console.log(res);
