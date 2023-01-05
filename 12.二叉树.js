/**
 * 什么是二叉树？
 * 是一棵树
 * 最多有两个子节点
 * 数据结构 {value , left?, right?,}
 */

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}
const tree1 = {
  value: 3,
  left: {
    value: 1,
    left: null,
    right: null
  },
  right: {
    value: 2,
    left: null,
    right: null
  }
}

/**
 * 二叉树前序遍历
 * @param {*} treeNode
 * @returns
 */
const preOrderTreeReverse = (treeNode) => {
  if (treeNode === null) return
  console.log(treeNode.value)
  preOrderTreeReverse(treeNode.left)
  preOrderTreeReverse(treeNode.right);
}

/**
 * 二叉树中序遍历
 * @param {*} treeNode
 * @returns
 */
const inOrderTreeReverse = (treeNode) => {
  if (treeNode === null) return
  inOrderTreeReverse(treeNode.left)
  console.log(treeNode.value)
  inOrderTreeReverse(treeNode.right);
}

/**
 * 二叉树后序遍历
 * @param {*} treeNode
 * @returns
 */
const postOrderTreeReverse = (treeNode) => {
  if (treeNode === null) return
  postOrderTreeReverse(treeNode.left)
  postOrderTreeReverse(treeNode.right);
  console.log(treeNode.value)
}

// preOrderTreeReverse(tree)
// inOrderTreeReverse(tree)
// postOrderTreeReverse(tree)

/**
 * 查找BST中第k小的数字
 * @param {*} treeNode 二叉树
 * @param {*} k 第k个数
 * @returns
 */
const searchKthNum = (treeNode, k) => {
  const arr = []
  inOrderTreeReverse(treeNode)
  return arr[k-1] || null
}

/**
 * 先序遍历 非递归版
 * @param {*} root
 * @returns
 */
const preOrder = (root) => {
  if(!root) return
  const stack = [root]
  while(stack.length){
    const n = stack.pop()
    console.log(n.value);
    if(n.right) stack.push(n.right)
    if(n.left) stack.push(n.left)
  }
}

const inOrder = (root) => {
  if(!root) return
  const stack = []
  let p = root
  while(stack.length || p){
    while(p){
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.value);
    p = n.right
  }
}

const postOrder = (root) => {
  if(!root) return
  const outputStack = []
  const stack = [root]
  while(stack.length){
    const n = stack.pop()
    outputStack.push(n.value)
    if(n.left) stack.push(n.left)
    if(n.right) stack.push(n.right)
  }
  while(outputStack.length){
    const b = outputStack.pop()
    console.log(b);
  }
}
// preOrderTreeReverse(tree)
// preOrder(tree)
// inOrder(tree1)
postOrder(tree)
const pre = (tree) => {
  if(tree === null) return;
  const stack = [tree]
  while (stack.length){
    const n = stack.pop()
    if(n === null) return
    console.log(n.value)
    if(n.right) stack.push(n.right)
    if(n.left) stack.push(n.left)
  }
}
// pre(tree)
