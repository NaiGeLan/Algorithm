/**
 * 移动0到数组的末尾（嵌套循环）
 * @param {*} arr 
 */
// const moveZero = (arr) => {
//   const length = arr.length;
//   let zeroLength = 0
//   if(length === 0) return 
//   for(let i = 0; i <= length - zeroLength; i++) {
//     if(arr[i] === 0) {
//       arr.push(0)
//       arr.splice(i, 1)
//       i--
//       zeroLength++
//     }
//   }
// }


/**
 * 移动0到数组的末尾（双指针）
 * @param {*} arr 
 */
const moveZero = (arr) => {
  const length = arr.length;
  if(length === 0) return 
  let i
  let j = -1 //指向第一个0
  for( i = 0; i < length; i++) {
    if(arr[i] === 0 && j < 0) {
      j = i
    }
    if(arr[i] !== 0 && j >= 0){
      const n = arr[i]
      arr[i] = arr[j]
      arr[j] = n

      j++
    }
  }
}

const arr = [1,2,0,3,0,4,0,2]
moveZero(arr)
console.log(arr);
