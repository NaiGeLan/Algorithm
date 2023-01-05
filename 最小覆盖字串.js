/**
 * leetcode 76
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const need = new Map() // 创建一个字典
  let res = '' // 初始化返回结果
  // 遍历所需要的字符串 将他们保存在字典里 并且记录所需个数 
  // 如ABC => {"A": 1, "B": 1, "C": 1}
  for(let char of t){ 
    need.set(char, need.has(char) ? need.get(char) + 1 : 1)
  }
  let left = 0 // 创建左右双指针
  let right = 0
  let needType = need.size // 所需元素的种类数
  while(right < s.length){ // 右指针遍历
    const cur = s[right]
    if(need.has(cur)){ // 当前遍历到的这个元素在 所需元素的字典里
      need.set(cur, need.get(cur) - 1) // 将字典里的该元素所需个数 -1
      if(need.get(cur) === 0) needType -- // 如果所需个数减到0 则所需元素种类数 -1
    }
    while(needType === 0){ // 当所需元素种类数为0时候 也就是当前滑动窗口中字符串包含所需的字符串
      const newRes = s.substring(left, right + 1) // 当前滑动窗口中字符串
      if (!res || newRes.length < res.length) res = newRes // 做个判断取最小 注意代码第一次走到这时候res = ‘’直接赋值就行
      const cur2 = s[left] // 左指针遍历
      if (need.has(cur2)){ // 当前左指针扫到的这个字符串在所需元素中 
        need.set(cur2, need.get(cur2) + 1) // 字典中当前元素所需数量需要变化
        if (need.get(cur2) === 1) needType ++ // 当加到1时候 说明滑动窗口中已经不完全包括所需字符串了，需要跳出循环 接着让右指针往后走
      }
      left ++
    }
    right ++
  }
  return res
};
const s = "ADOBECODEBANC"
const t = "ABC"
const res = minWindow(s, t)
console.log(res);
