class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    const dequeuedNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    return dequeuedNode.value;
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
    const queueValues = [];

    while (current) {
      queueValues.push(current.value);
      current = current.next;
    }

    console.log(queueValues);
  }
}

export { Queue };
