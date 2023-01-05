
/**
 * 递增数组arr中寻找两个数字之和等于target的
 * @param {*} arr 
 * @param {*} target 
 * @returns 
 */
function findTowNum(arr, target) {
  const res = []
  const length = arr.length
  let i = 0
  let j = length - 1
  while (i < j) {
    const sum = arr[i] + arr[j]
    if (sum < target) {
      i++
    }
    if (sum > target) {
      j--
    }
    if (sum === target) {
      res.push(arr[i])
      res.push(arr[j])
      return res
    }
  }
  return res
}

// 测试结果
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const target = 5
const res = findTowNum(arr, target)
console.log(res);
