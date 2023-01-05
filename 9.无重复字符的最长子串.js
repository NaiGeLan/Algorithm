/**
 * 自己写的
 * @param {*} s 
 */
function lengthOfLongestSubstring(s) {
  let left = 0
  let right = 1
  let max = 0
  const length = s.length
  if(length === 0)  return 0
  let arr = []
  if(s.length === 1) return 1
  while(right < length) {
    const leftStr = s.charAt(left)
    const rightStr = s.charAt(right)
    if(arr.length === 0) arr.push(leftStr)
    if (arr.includes(rightStr)) {
      left++
      right = left + 1
      max = Math.max(max, arr.length)
      arr = []
    }else {
      arr.push(rightStr)
      right++
    }
    
  }
  return max ? Math.max(arr.length, max) : arr.length
}
const res = lengthOfLongestSubstring("aab")
console.log(res);

// lēetcood官方解法
var lengthOfLongestSubstring = function(s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
  let rk = -1, ans = 0;
  for (let i = 0; i < n; ++i) {
      if (i != 0) {
          // 左指针向右移动一格，移除一个字符
          occ.delete(s.charAt(i - 1));
      }
      while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
          // 不断地移动右指针
          occ.add(s.charAt(rk + 1));
          ++rk;
      }
      // 第 i 到 rk 个字符是一个极长的无重复字符子串
      ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
