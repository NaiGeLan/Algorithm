
Array.prototype.unshift = function () {
  var newArray = [...arguments, ...this];
  //长度也要变化
  this.length = newArray.length;
  //可以改变数组
  for (var i = 0; i < newArray.length; i++) {
      this[i] = newArray[i]
  }
  return this.length;
}


/**
 * 
 * @param {*} arr 
 * @param {*} k 
 * @returns 
 */
function turn(arr,k){
  const step = Math.abs(k % arr.length) 
  for(let i=0;i<step;i++){
    arr.unshift(arr.pop())
  }
  return arr
}


/**
 * 
 * @param {*} arr 
 * @param {*} k 
 * @returns 
 */
// function turn(arr,k){
//   const step = Math.abs(k % arr.length)
//   return arr.slice(-step).concat(arr.slice(0,-step))
// }

const res = turn([1,2,3,4,5,6,7],3)
console.log(res);

console.log([1,2,3,4,5,6,7].slice(0,-3))
