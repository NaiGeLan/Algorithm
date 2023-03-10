const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'c',
          children: [
            
          ]
        },
        {
          val: 'd',
          children: [
            
          ]
        }
      ]
    },
    {
      val: 'e',
      children: [
        {
          val: 'f',
          children: [
            
          ]
        },
        {
          val: 'g',
          children: [
            
          ]
        }
      ]
    }
  ]
}

/**
 * 深度优先遍历
 * @param {s} root 
 */
const dfs = (root) => {
  console.log(root.val)
  root.children.forEach((child) => {
    dfs(child)
  });
} 


/**
 * 广度优先遍历
 * @param {*} root 
 */
const bfs = (root) => {
  const q = [root]
  while (q.length > 0){
    const n = q.shift()
    console.log(n.val)
    n.children.forEach((child) => {
      q.push(child)
    });
  }
}

// dfs(tree)
bfs(tree)
