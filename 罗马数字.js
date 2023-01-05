/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = new Map();
  map.set('I',1)
  map.set('V',5)
  map.set('X',10)
  map.set('L',50)
  map.set('C',100)
  map.set('D',500)
  map.set('M',1000)
  let prev = s.charAt(0)
  let sum = 0
  for(let i = 1; i <= s.length; i++){
    let cur = s.charAt(i)
    if(map.get(cur) > map.get(prev)){
      sum -= map.get(prev)
    }else if(map.get(cur) <= map.get(prev)){
      sum += map.get(prev)
    }
    prev = cur
  }
  sum = sum + map.get(s.charAt(s.length - 1))
  return sum
};
const num = "LVIII"
const res = romanToInt(num)
console.log(res);
