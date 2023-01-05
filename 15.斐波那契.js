
/**
 * 递归实现斐波那契
 * @param {*} n 
 * @returns 
 */
// const fibonacci = (n) => {
//   if(n <= 0) return 0
//   if(n == 1) return 1
//
//   return fibonacci(n-2) + fibonacci(n-1)
//   
// }



/**
 * 循环实现斐波那契
 * @param {*} n 
 * @returns 
 */
const fibonacci = (n) => {
  if(n <= 0) return 0
  if(n == 1) return 1
  let res = 0
  let n1 = 0
  let n2 = 1
  for(let i = 0; i <= n; i++) { 
    res = n1 + n2
    n1 = n2
    n2 = res
  }
  return res
}

console.log(fibonacci(1000));
