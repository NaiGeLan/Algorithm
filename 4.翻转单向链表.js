/**
 * 将数组转换为链表
 * @param {*} arr 
 * @returns 
 */
function createLinkList(arr){
  const length = arr.length
  let curLinkList = {
    value: arr[length - 1],
  }
  for(let i = length - 2; i >= 0; i--){
    curLinkList = {
      value: arr[i],
      next: curLinkList
    }
  }
  return curLinkList
}


/**
 * 翻转链表
 * @param {*} linkList 
 * @returns 
 */
function reverseLinkList(linkList){
  // 创建三个指针 代表当前节点，下一个节点，上一个节点
  let cur = linkList
  let next = linkList.next
  let prev = null
  
  while(cur ){
    if(cur && !prev){ // 如果是第一个节点 删除next
      delete cur.next
    }

    if(cur && prev){ // 如果不是第一个节点，将next指向prev
      cur.next = prev
    }
    // 将三个指针向后移动一位
    prev = cur
    cur = next
    next = next?.next
  }
  return prev
}

// 测试结果
const arr = [1,2,3,4,5,6,7,8,9]
const linkList = createLinkList(arr)
const reverselinkList = reverseLinkList(linkList)
console.log(linkList);
console.log(reverselinkList);
