/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let length = 0
  strs.forEach((res) => {
    if(length !== 0){
      length = Math.min(length, res.length)
    }else {
      length = res.length
    }
  })
  let arr = []
  for(let i = 0; i < length; i++){
    strs.forEach((res) => {
      if(arr.indexOf(res[i]) === -1) arr.push(res[i])
    })
    if(arr.length > i + 1){
      return arr.splice(0, i).join('')
    }
    if(arr.length === length) return arr.join('')

  }
  return ''
};
const strs = ["aa","aa"]
const res = longestCommonPrefix(strs)
console.log(res);
