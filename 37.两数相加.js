/**
 * LeetCode 2
 */


function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let head = null 
  let tail = null
  let carry = 0 // 进位
  while(l1|| l2){
    n1 = l1?.val ? l1.val : 0
    n2 = l2?.val ? l2.val : 0
    if(!head) {
      head = tail = new ListNode((n1 + n2) % 10)
    }else {
      tail.next = new ListNode((n1 + n2 + carry) % 10)
      tail = tail.next
    }
      carry = Math.floor((n1 + n2 + carry ) / 10) 
      
      if(l1) l1 = l1.next
      if(l2) l2 = l2.next
  }
  if(carry > 0) {
    curNode.next = new ListNode(carry)
  }
  return head
};

const l1 = {
  val:2,
  next:{
    val:4,
    next:{
      val:3,
      next:{
        val:1,
        next:{
          val:5,
          next:null
        }
      }
    }
  }
}

const l2 = {
  val:5,
  next:{
    val:6,
    next:{
      val:4,
      next:{
        val:4,
        next:{
          val:4,
          next:null
        }
      }
    }
  }
}

const res = addTwoNumbers(l1, l2)
console.log(res);
