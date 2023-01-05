
const matchStmbol = (left, right) => {
  if (left === '(' && right === ')') {
    return true
  }
  if (left === '[' && right === ']') {
    return true
  }
  if (left === '{' && right === '}') {
    return true
  }
  return false
}

/**
 * 
 * @param {*} str 
 * @returns boolean 是否是匹配的括号
 */
function matchBracket(str){
  const stack = []
  const length = str.length
  const left = ['(','[','{'] // 左括号
  const right = [')',']','}'] // 右括号
  if(length%2 !== 0) return false // 奇数个肯定不匹配
  if(length === 0) return true // 空字符串肯定匹配

  for(let i = 0 ; i<length ; i++) {
    const char = str[i]
    if(left.includes(char)){
      // 判断左括号 入栈
      stack.push(char)
    }
    if(right.includes(char)){
      // 判断右括号 出栈
      const top = stack.pop()
      if(!matchStmbol(top,char)){
        return false
      }
    }
  }
  return stack.length === 0
}


const res = matchBracket('()')
console.log(res);
