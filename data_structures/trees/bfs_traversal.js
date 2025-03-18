import { BinarySearchTree } from "./binary_search_tree_iterative.js";
import { Queue } from "../stacks_and_queues/queue_linked_list.js";

class BFS extends BinarySearchTree {
  constructor() {
    super();
  }

  /**
   * Performs a Breadth-First Search (BFS) traversal of the tree.
   * @returns {number[]} An array of node values visited in BFS order.
   *
   * BFS Algorithm:
   * 1. If the tree is empty, return an empty array.
   * 2. Initialize a queue and add the root node to it.
   * 3. While the queue is not empty:
   *    a. Dequeue a node from the queue.
   *    b. Add the dequeued node's value to the visited list.
   *    c. If the node has a left child, enqueue it.
   *    d. If the node has a right child, enqueue it.
   * 4. Return the visited array.
   */
  traverse() {
    if (!this.root) return []; // Handle empty tree case

    const queue = new Queue();
    const visited = [];

    queue.enqueue(this.root);

    while (queue.size > 0) {
      const visitedNode = queue.dequeue();
      visited.push(visitedNode.value);

      if (visitedNode.left) queue.enqueue(visitedNode.left);
      if (visitedNode.right) queue.enqueue(visitedNode.right);
    }

    return visited;
  }
}

// Utility function for testing
function test(actual, expected, testName) {
  const res = JSON.stringify(actual) === JSON.stringify(expected) ? "✅ passed" : "🆘 failed";
  console.log(`${testName}: ${res} (got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)})`);
}

// Utility function for creating sample trees
function createSampleTree(tree) {
  tree.insert(100);
  tree.insert(50);
  tree.insert(200);
  tree.insert(25);
  tree.insert(75);
  tree.insert(350);
  return tree;
}


// Run tests
console.log("==== Running BFS Tests ====");

// 1. BFS on a sample tree
const bfsTree = new BFS();
bfsTree.createSampleTree();
console.log("Sample Tree Structure:");
bfsTree.printTree()
test(bfsTree.traverse(), [100, 50, 200, 25, 75, 350], "BFS traversal on sample tree");

// 2. BFS on an empty tree
const emptyTree = new BFS();
test(emptyTree.traverse(), [], "BFS traversal on empty tree");

// 3. BFS on a single-node tree
const singleNodeTree = new BFS();
singleNodeTree.insert(42);
test(singleNodeTree.traverse(), [42], "BFS traversal on single-node tree");

// 4. BFS on a left-heavy tree
const leftHeavyTree = new BFS();
leftHeavyTree.insert(100);
leftHeavyTree.insert(90);
leftHeavyTree.insert(80);
leftHeavyTree.insert(70);
test(leftHeavyTree.traverse(), [100, 90, 80, 70], "BFS traversal on left-heavy tree");

// 5. BFS on a right-heavy tree
const rightHeavyTree = new BFS();
rightHeavyTree.insert(100);
rightHeavyTree.insert(110);
rightHeavyTree.insert(120);
rightHeavyTree.insert(130);
test(rightHeavyTree.traverse(), [100, 110, 120, 130], "BFS traversal on right-heavy tree");

console.log("==== BFS Tests Completed ====");
