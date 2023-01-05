var twoOutOfThree = function(nums1, nums2, nums3) {
  // 总共三个数组 求出每两个数组的交集 然后求个并集 然后去个重 大傻瓜写法
  const arr1 = [...new Set(nums1)].filter(res => {
      return nums2.includes(res)
  })
  const arr2 = [...new Set(nums2)].filter(res => {
    return nums3.includes(res)
  })
  const arr3 = [...new Set(nums1)].filter(res => {
    return nums3.includes(res)
  })
  const res = [...new Set([...arr1, ...arr2, ...arr3])]
  return res
};
