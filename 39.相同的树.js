/**
 * leetCode 100
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

const preOrderTreeReverse = (p, q) => {
  if (treeNode === null) return
  if(p.value !== q.value) return false
  preOrderTreeReverse(p.left, q.left)
  preOrderTreeReverse(p.right, q.right)
}
var isSameTree = function(p, q) {
  if(p === null && q === null) return true
  if(p === null || q === null) return false
  if(p.value !== q.value) return false
  preOrderTreeReverse(p,q)
  return true
};
