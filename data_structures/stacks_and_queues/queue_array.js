class Queue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(val) {
    this.queue.push(val);

    return ++this.size;
  }

  dequeue() {
    const dequeud = this.queue.shift();
    this.size--;

    return dequeud;
  }
}

export { Queue };
