/**
 * 两个栈实现一个队列
 */
class Queue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }
  get length() {
    return this.stack1.length
  }
  add(){
    this.stack1.push(...arguments)
  }
  delete(){
    const {stack1, stack2} = this
    let res
    while (stack1.length) {
      stack2.push(stack1.pop())
    }
    res = stack2.pop()

    while (stack2.length) {
      stack1.push(stack2.pop())
    }
      
  }
  

}

const queue = new Queue()
queue.add(1)
queue.add(2)
queue.add(3)
console.log(queue.length);
console.log(queue);
queue.delete()
console.log(queue);
