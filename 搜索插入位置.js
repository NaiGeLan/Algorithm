var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right/2))
    const midVal = nums[mid]
    if(midVal === target){
      return mid
    }
    if(midVal > target){
      right = mid - 1
    }
    if(midVal < target){
      left = mid + 1
    }
   
  }
  return left
};

const arr = [1,3,5,6]
const val = 2
const res = searchInsert(arr, val)
console.log(res);
