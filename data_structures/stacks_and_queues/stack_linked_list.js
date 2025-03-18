class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    push(value) {
      const newNode = new Node(value);
  
      if (!this.first) {
        this.first = newNode;
        this.last = newNode;
      } else {
        newNode.next = this.first;
        this.first = newNode;
      }
  
      return ++this.size;
    }
  
    pop() {
      if (!this.first) return null;
  
      const poppedNode = this.first;
  
      if (this.first === this.last) {
        this.last = null;
      }
  
      this.first = this.first.next;
      this.size--;
  
      return poppedNode.value;
    }
  
    peek() {
      if (!this.first) return null;
      return this.first.value;
    }
  
    isEmpty() {
      return this.size === 0;
    }
  
    getSize() {
      return this.size;
    }
  
    clear() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    print() {
      let current = this.first;
      const stackValues = [];
  
      while (current) {
        stackValues.push(current.value);
        current = current.next;
      }
  
      console.log(stackValues);
    }
  }
  
  // Testing
  const stack = new Stack();
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  stack.print(); // Output: [30, 20, 10]
  
  console.log(stack.pop()); // Output: 30
  console.log(stack.peek()); // Output: 20
  console.log(stack.getSize()); // Output: 2
  console.log(stack.isEmpty()); // Output: false
  
  stack.clear();
  console.log(stack.isEmpty()); // Output: true