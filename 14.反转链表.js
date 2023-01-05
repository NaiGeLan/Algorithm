/**
 * 反转链表（循环）
 * @param {*} head 
 * @returns 
 */
const reverseList = (head) => {
  let prevNode = null
  let curNode = head
  while(curNode){
      const temp = curNode.next
      curNode.next = prevNode
      prevNode = curNode
      curNode = temp
  }
  return prevNode
};
const node = {
  val:1,
  next:{
    val:2,
    next:{
      val:3,
      next:{
        val:4,
        next:{
          val:5,
          next:null
        }
      }
    }
  }
}
const res = reverseList(node)
console.log(res);
