/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const preHead = {
    val: null,
    next: null,
  }
  let prev = preHead
  while (list1 !== null && list2 !== null) {
    if(list1.val >= list2.val){
      prev.next = list2
      list2 = list2.next
    }else {
      prev.next = list1
      list1 = list1.next
    }
  }
  prev.next = list1 === null ? list2 : list1
  return preHead.next
};
var mergeTwoLists = function(l1, l2) {
  const prehead = new ListNode(-1);

  let prev = prehead;
  while (l1 != null && l2 != null) {
      if (l1.val <= l2.val) {
          prev.next = l1;
          l1 = l1.next;
      } else {
          prev.next = l2;
          l2 = l2.next;
      }
      prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};
const list1 = {
  val:1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}

const list2 = {
  val:1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}
const res = mergeTwoLists(list1, list2)
console.log(res);
