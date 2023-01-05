var isValid = function(s) {
  if(s.length % 2 === 1) return false
  const stack = []
  const map = new Map()
  map.set("(",")")
  map.set("[","]")
  map.set("{","}")
  for(let i = 0; i < s.length ; i++){
      const cur = s[i]
      if(map.has(cur)){
          stack.push(cur)
      }else {
          const last = stack[stack.length - 1]
          if(map.get(last) === cur){
              stack.pop()
          }else {
              return false
          }
      }
  }
  return stack.length === 0 ? true : false
};

const res = isValid("()")
console.log(res);
