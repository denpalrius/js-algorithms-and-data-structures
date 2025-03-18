class Stack {
  constructor() {
    this.items = []; // Use an array for the stack
  }

  push(val) {
    this.items.push(val); // Add to the end of the array
    return this.items.length;
  }

  pop() {
    if (this.items.length === 0) return null;
    return this.items.pop(); // Remove and return the last element
  }

  peek() {
    if (this.items.length === 0) return null;
    return this.items[this.items.length - 1]; // Return the last element without removing it
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  print() {
    console.log(this.items);
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.print(); // Output: [10, 20, 30]

console.log(stack.pop()); // Output: 30
console.log(stack.peek()); // Output: 20
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();

console.log(stack.isEmpty()); // Output: true