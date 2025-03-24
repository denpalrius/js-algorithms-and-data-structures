class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.values.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[idx].priority >= this.values[parentIdx].priority) break;
      [this.values[idx], this.values[parentIdx]] = [
        this.values[parentIdx],
        this.values[idx],
      ];
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      
      idx = swap;
    }
  }

  peek() {
    return this.values[0];
  }

  size() {
    return this.values.length;
  }

  isEmpty() {
    return this.values.length === 0;
  }
}

// Testing
function test(actual, expected, testName) {
  const res =
    JSON.stringify(actual) === JSON.stringify(expected)
      ? "✅ passed"
      : "🆘 failed";
  console.log(
    `${testName}: ${res} (got ${JSON.stringify(
      actual
    )}, expected ${JSON.stringify(expected)})`
  );
}

// PriorityQueue Tests
console.log("==== PriorityQueue Tests ====");

const pq = new PriorityQueue();

// Test 1: Empty Queue
test(pq.isEmpty(), true, "isEmpty() on empty queue");

// Test 2: Enqueue and Peek
pq.enqueue("task1", 3);
pq.enqueue("task2", 1);
pq.enqueue("task3", 2);
test(pq.peek().val, "task2", "peek() after enqueue");

// Test 3: Dequeue
test(pq.dequeue().val, "task2", "dequeue() first element");
test(pq.dequeue().val, "task3", "dequeue() second element");
test(pq.dequeue().val, "task1", "dequeue() third element");

// Test 4: isEmpty after dequeue all
test(pq.isEmpty(), true, "isEmpty() after dequeue all");

// Test 5: Size
pq.enqueue("task4", 4);
pq.enqueue("task5", 5);
test(pq.size(), 2, "size() after enqueuing 2 elements");

// Test 6: Dequeue and Size
pq.dequeue();
test(pq.size(), 1, "size() after one dequeue");

// Test 7: edge case, repeated priority
pq.enqueue("task6", 1);
pq.enqueue("task7", 1);
test(pq.dequeue().val, "task6", "dequeue() repeated priority element");
test(pq.dequeue().val, "task7", "dequeue() repeated priority element");

// Test 8: Large number of elements
const largePQ = new PriorityQueue();
for (let i = 0; i < 100; i++) {
  largePQ.enqueue("task" + i, Math.floor(Math.random() * 100));
}

let lastPriority = -1;
let sorted = true;
while (!largePQ.isEmpty()) {
  const item = largePQ.dequeue();
  if (lastPriority > item.priority) {
    sorted = false;
    break;
  }
  lastPriority = item.priority;
}
test(sorted, true, "Large queue maintains priority order");

console.log("==== PriorityQueue Tests Completed ====");
