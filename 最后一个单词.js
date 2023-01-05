/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  const str = s.trim().split('')
  const length = str.length
  const arr = []
  for(let i = length; i > 0; i--){
      if(str[i - 1] !== ' '){
          arr.push(str[i - 1])
      }else {
          break
      }
  }
  return arr.length
};
const s = "Hello World"
const res = lengthOfLastWord(s)
console.log(res);
