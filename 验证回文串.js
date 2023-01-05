
/** leetcode 125 判断回文串
 * @param {string} s
 * @return {boolean}
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 * 字母和数字都属于字母数字字符。
 * 输入: s = "A man, a plan, a canal: Panama"
 * 输出：true
 * 解释："amanaplanacanalpanama" 是回文串。
 */
var isPalindrome = function(s) {
  const reg = /[A-Za-z]/
  const reg1 = /[0-9]/
  const arr = []
  for(let i = 0; i < s.length; i++) {
    if(reg.test(s[i]) || reg1.test(s[i])) {
      arr.push(s[i])
    }
  }
  let left = 0
  let right = arr.length - 1
  while(left <= right) {
    const leftCur = arr[left].toLowerCase()
    const rightCur = arr[right].toLowerCase()
    if(leftCur !== rightCur) {
      return false
    }
    left ++
    right --
  }
  return true
};
var isPalindrome = function(s) {
  const reg = /[A-Za-z]/
  const reg1 = /[0-9]/
  const arr = []
  for(let i = 0; i < s.length; i++) {
    if(reg.test(s[i]) || reg1.test(s[i])) {
      arr.push(s[i].toLowerCase())
    }
  }
  return arr.join('') == [...arr].reverse().join('')
};

const res = isPalindrome("A man, a plan, a canal: Panama")
console.log(res);
