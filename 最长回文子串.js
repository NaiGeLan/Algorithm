/**
 *
 * @param {*} s
 */
// const longestPalindrome = (s) => {
//   const map = new Map();
//   const length = s.length
//   const arr = s.split('')
//   const arrCopy = [...arr].reverse()
//   if(length < 2 || arrCopy.toString() == arr.toString() || [...new Set(arr)].length === 1){
//     return s;
//   }
//   let maxLen = 1
//   let begin = 0
//   let arrList = []
//
//   for(let i = 1; i < length; i++){
//     arrList[i,i] = true
//   }
//
//   for(let L = 2; L < length; L++){
//     for(let i = 0; i < length; i++){
//       let j  = L + i - 1
//       if(j > length) break
//       if(arr[i] !== arr[j]){
//         arrList[i,j] = false
//       }else {
//         if(j - i < 3) arrList[i,j] = true
//         else {
//           arrList[i,j] = arrList[i+1,j-1]
//         }
//       }
//       if(arrList[i,j] && j - i + 1 > maxLen){
//         maxLen = j - i + 1
//         begin = i
//       }
//     }
//   }
//   return s.substring(begin,begin + maxLen)
// }
function longestPalindrome(s) {
  if (s.length == 0) return "";
  let n = s.length;
  let dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(n).fill(false);
  }
  let maxLen = 1;
  let start = 0;
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] == s[j] && (j - i < 2 || dp[i + 1][j - 1])) {
        dp[i][j] = true;
        if (j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          start = i;
        }
      }
    }
  }
  return s.substring(start, start + maxLen);
}
// const isPalind  = (s) => {
//   if(s.length % 2 === 0) return false
//   const mid = Math.floor(s.length/2)
//   const cur = s[mid]
//   for(let i = 1; i < mid; i++) {
//     const left = s[mid - i]
//     const right = s[mid + i]

//     if(i === 1){
//       if(left === cur || right === cur){
//         return false
//       }
//     }
//     if(left !== right){
//       return false
//     }
//   }
//   return true
// }
// const isPalind1 = (s) => {
//   if(s.length % 2 !== 0) return false
//   const mid1 = Math.floor(s.length / 2)
//   const mid2 = Math.floor(s.length / 2) + 1
//   const cur1 = s[mid1]
//   const cur2 = s[mid2]
//   if(cur1 !== cur2) return false
//   for(let i = 1; i < mid ; i++) {
//     const left = s[mid1 - i]
//     const right = s[mid2 + i]
//     if(left !== right) return false
//   }
//   return true
// }

// const s = 'abacda'
// console.log(isPalind(s));

// function manacher(s) {
//   // 在每个字符之间插入特殊字符，以避免奇偶性的问题
//   const t = ['#'];
//   for (let i = 0; i < s.length; i++) {
//     t.push(s[i]);
//     t.push('#');
//   }

//   // 初始化每个回文中心的最长回文半径
//   const p = new Array(t.length).fill(0);
//   let mx = 0; // 当前回文中心所能到达的最右端点
//   let id = 0; // 当前最长回文子串的中心
//   let maxLen = 0; // 最长回文子串的长度
//   let centerIndex = 0; // 最长回文子串的中心
//   for (let i = 0; i < t.length; i++) {
//     // 计算当前回文中心的最长回文半径
//     if (i < mx) {
//       p[i] = Math.min(p[2 * id - i], mx - i);
//     } else {
//       p[i] = 1;
//     }

//     // 扩展当前回文中心的最长回文半径
//     while (t[i - p[i]] === t[i + p[i]]) {
//       p[i]++;
//     }

//     // 更新当前回文中心所能到达的最右端点和最长回文子串的中心
//     if (mx < i + p[i]) {
//       mx = i + p[i];
//       id = i;
//     }

//     // 更新最长回文子串的长度和中心
//     if (p[i] > maxLen) {
//       maxLen = p[i];
//       centerIndex = i;
//     }
//   }

//   // 计算最长回文子串的起始位置
//   const start = (centerIndex - maxLen) / 2;
//   // 返回最长回文子串
//   return s.slice(start, start + maxLen - 1);
// }

const res = longestPalindrome("bacabab")
console.log(res);
