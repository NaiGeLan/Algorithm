var removeDuplicates = function(nums) {
  const length = nums.length
  let n1 = 0
  let n2 = 1
  while(n2 < length){
    if(nums[n1] === nums[n2]){
      nums.splice(n2,1)
    }else {
      n1++
      n2++
    }
    length = nums.length
  }
  return length
};

// var removeDuplicates = function(nums) {
//   const n = nums.length;
//   if (n === 0) {
//       return 0;
//   }
//   let fast = 1, slow = 1;
//   while (fast < n) {
//       if (nums[fast] !== nums[fast - 1]) {
//           nums[slow] = nums[fast];
//           ++slow;
//       }
//       ++fast;
//   }
//   return slow;
// };

// const arr = [1,1,2,3,3,4]
const res = removeDuplicates([0,0,1,1,1,2,2,3,3,4])
console.log(res);
