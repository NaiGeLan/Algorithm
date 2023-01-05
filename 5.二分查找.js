/**
 * 二分查找（循环）
 * @param {*} arr 
 * @param {*} target 
 */
function binarySearch(arr, target) {
  const length = arr.length
  if(length === 0) return -1
  let startIndex = 0 // 开始索引
  let endIndex = length - 1 // 结束索引
  while(startIndex <= endIndex){
    const middleIndex = Math.floor((startIndex + endIndex) / 2) // 中间索引
    if(arr[middleIndex] === target) return middleIndex
    if(arr[middleIndex] > target) endIndex = middleIndex - 1 // 目标值在左边 重新设置结束索引 在左侧查找
    if(arr[middleIndex] < target) startIndex = middleIndex + 1 // 目标值在右边 重新设置开始索引 在右侧查找
  }
  return -1 // 没有找到
}


/**
 *  二分查找(递归)
 * @param {*} arr 
 * @param {*} target 
 * @param {*} startIndex 
 * @param {*} endIndex 
 * @returns 
 */
function binarySearch(arr, target, startIndex, endIndex){
  const length = arr.length
  if(length === 0) return -1
  if(startIndex === undefined) startIndex = 0
  if(endIndex === undefined) endIndex = length - 1
  if(startIndex > endIndex) return -1
  const middleIndex = Math.floor((startIndex + endIndex) / 2)
  if(arr[middleIndex] === target) return middleIndex
  if(arr[middleIndex] > target) return binarySearch(arr, target, startIndex, middleIndex - 1)
  if(arr[middleIndex] < target) return binarySearch(arr, target, middleIndex + 1, endIndex)

}


// 测试结果
const arr = [1,2,3,4,5,6,7,8,9]
const target = 5
const index = binarySearch(arr, target)
console.log(index);

// 循环比递归块一丢丢 递归要频繁的调用函数，循环只需要一次 每次函数都有开销
