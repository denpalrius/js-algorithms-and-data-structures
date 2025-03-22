import { BinaryHeap } from "./binary_heap.js";

class MaxHeap extends BinaryHeap {
  constructor() {
    super();
  }

  /**
   * Inserts a new element into the heap and maintains max-heap property.
   * @param {number} element - The element to be inserted.
   */
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  /**
   * Ensures the last inserted element is placed correctly to maintain heap order.
   */
  bubbleUp() {
    let idx = this.values.length - 1;
    const elementVal = this.values[idx];

    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIdx];

      if (elementVal <= parent) break; // Stop if heap property is maintained

      // Swap the current element with its parent
      this.values[idx] = parent;
      this.values[parentIdx] = elementVal;

      // Move up the heap
      idx = parentIdx;
    }
  }

  /**
   * Removes and returns the maximum element (root of the heap).
   * @returns {number|null} The maximum element or null if the heap is empty.
   */
  extractMax() {
    if (this.values.length === 0) return null; // Empty heap
    if (this.values.length === 1) return this.values.pop(); // Only one element case

    const max = this.values[0]; // Root is the max element
    this.values[0] = this.values.pop(); // Remove last element and move it to the root

    this.sinkDown(); // Restore heap order

    return max;
  }

  /**
   * Ensures the root element is placed correctly after extraction to maintain heap order.
   */
  sinkDown() {
    const length = this.values.length;
    let idx = 0;
    const element = this.values[idx];

    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;
      let swap = null; // Track index to swap with

      // Check left child
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      // Check right child
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break; // Stop if heap order is maintained

      // Swap the element with the larger child
      this.values[idx] = this.values[swap];
      this.values[swap] = element;

      // Move down the heap
      idx = swap;
    }
  }
}



// Run tests
console.log("==== Running MaxHeap Tests ====");

function test(actual, expected, testName) {
    const res = JSON.stringify(actual) === JSON.stringify(expected) ? "✅ passed" : "🆘 failed";
    console.log(`${testName}: ${res} (got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)})`);
}

const heap = new MaxHeap();

// Test Initial Insertion
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
test(heap.values, [41, 39, 33, 18, 27, 12], "Heap after initial insertions");

// Test Inserting 55
heap.insert(55);
test(heap.values, [55, 39, 41, 18, 27, 12, 33], "Heap after inserting 55");

// Test Extracting Max (should remove 55)
const removed1 = heap.extractMax();
test(removed1, 55, "Extracted max element (should be 55)");
test(heap.values, [41, 39, 33, 18, 27, 12], "Heap after removing max");

// Test Extracting Max Again (should remove 41)
const removed2 = heap.extractMax();
test(removed2, 41, "Extracted max element (should be 41)");
test(heap.values, [39, 27, 33, 18, 12], "Heap after removing second max");

// Edge Case: Extract Max from Empty Heap
const emptyHeap = new MaxHeap();
test(emptyHeap.extractMax(), null, "Extract max from an empty heap");

// Edge Case: Extract Max from Single-Element Heap
const singleElementHeap = new MaxHeap();
singleElementHeap.insert(99);
test(
  singleElementHeap.extractMax(),
  99,
  "Extract max from a single-element heap"
);
test(singleElementHeap.values, [], "Heap should be empty after extraction");

// Edge Case: Inserting Duplicate Values
const duplicateHeap = new MaxHeap();
duplicateHeap.insert(50);
duplicateHeap.insert(50);
duplicateHeap.insert(50);
duplicateHeap.insert(50);
test(
  duplicateHeap.values,
  [50, 50, 50, 50],
  "Heap should handle duplicate values correctly"
);

// Edge Case: Heapify a large number of elements
const largeHeap = new MaxHeap();
const numbers = [5, 9, 20, 15, 30, 25, 60, 2, 50, 100, 40];
numbers.forEach((num) => largeHeap.insert(num));
test(
  largeHeap.extractMax(),
  100,
  "Extract max from a large heap (should be 100)"
);
test(
  largeHeap.values[0],
  60,
  "After extracting max, new root should be the second-largest element (60)"
);

console.log("==== MaxHeap Tests Completed ====");
