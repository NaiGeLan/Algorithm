function intersection(arr1, arr2) {
  const arr = [...new Set(arr1)].filter(item => [...new Set(arr2)].includes(item))
  return arr
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [2, 4, 6, 8, 10]
const arr3 = intersection(arr1, arr2)
console.log(arr3);
