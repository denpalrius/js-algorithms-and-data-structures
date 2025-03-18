class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(val) {
    this.queue.push(val);
    this.size++;

    return this.size;
  }

  dequeue() {
    if (this.size === 0) return null;

    const dequeued = this.queue.shift();
    this.size--;

    return dequeued;
  }

  peek() {
    if (this.size === 0) return null;
    return this.queue[0];
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.queue = [];
    this.size = 0;
  }

  print() {
    console.log(this.queue);
  }
}

export { Queue };
