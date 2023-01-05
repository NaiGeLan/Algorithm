/** leetcode 3
 * 双指针 滑动窗口
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
  let left = 0 // 左指针
  let res = 0 // 初始化返回结果
  const map = new Map() // 创建一个字典
  for(let right = 0; right < s.length; right ++){ // 用右指针来遍历字符串
      if(map.has(s[right]) && map.get(s[right]) >= left){ // 如果字典中含有当前右指针扫过的元素 并且这个元素在左指针之后（保证在当前滑动窗口当中）
        left = map.get(s[right]) + 1 // 将左指针向后移 移到前面那个 与现在扫到的这个元素重复的元素 之后的一位
      }
      // 字典中没有 当前右指针扫过的元素
      res = Math.max(res, right - left + 1) // 给结果赋值 比较之前的结果 和现在滑动窗口的大小 取个较大值
      map.set(s[right], right) // 将当前右指针扫到的元素加入字典中
  }
  return res
};
const str ="abcabcbb"
const res = lengthOfLongestSubstring(str)
console.log(res);
