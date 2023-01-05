/**
 * leetcode 1
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
var twoSum = function(nums, target) {
  const map = new Map() // 创建一个字典
  const length = nums.length
  for(let i = 0; i < length; i++){ // 遍历数组
      const cur = map.get(target - nums[i]) // 获取字典里有没有所求的元素
      if(cur !== undefined){ // 如果有 则直接返回
        return [cur, i]
      }else { // 如果没有 则储存在字典里
        map.set(nums[i], i)
      }
  }
};

const nums = [2,7,11,15]
const target = 9
const res = twoSum(nums, target)
console.log(res);
