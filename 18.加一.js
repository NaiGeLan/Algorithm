/**
 * leetcode 66
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const length = digits.length
    if(length < 2){
    const cur = digits[length - 1]
    if(cur + 1 > 9){
      digits[0] = 1
      digits[1] = (cur + 1) % 10
    }else {
      digits[length - 1] = cur + 1
    }
    return digits
  }
  if(digits[length - 1] !== 9){
    digits[length - 1] +=1
    return  digits
  }else {
    for(let i = 0; i < length; i++){
      if(digits[length - 1 -i] === 9){
        digits[length - 1 -i] = 0
      }else {
        digits[length - 1 -i] += 1
        return digits
      }
    }
    digits.unshift(1)
    return digits
  }
};
const digits = [9,9]
const res = plusOne(digits)
console.log(res);
