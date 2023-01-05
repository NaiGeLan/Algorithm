/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let l1 = head
  let l2 = head?.next
  while(l1 && l2){
    if(l1.val === l2.val){
      l1.next = l2.next
    }else {
      l1 = l1.next
    }
    l2 = l2.next
  }
  return head
};
const node = {
  val:1,
  next:{
    val:1,
    next:{
      val:2,
      next:{
        val:3,
        next:{
          val:3,
          next: null
        }
      }
    }
  }
}

const res = deleteDuplicates(node) //
console.log(res);
