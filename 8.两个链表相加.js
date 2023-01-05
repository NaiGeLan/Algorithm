/**
 * 
 * @param {*} l1 
 * @param {*} l2 
 * @returns 
 */
function addTwoNums(l1, l2){
  let carry = 0
  let head = null
  let tail = null
  while(l1 || l2) {
    const n1 = l1? l1.val : null
    const n2 = l2? l2.val : null
    const sum = carry + n1 + n2
    carry = Math.floor(sum/10)
    if (!head) {
      head = tail = new ListNode(sum % 10)
    }else {
      tail.next = new ListNode(sum % 10)
      tail = tail.next
    }
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if(carry > 0){
    tail.next = new ListNode(carry)
  }
  return head
}
