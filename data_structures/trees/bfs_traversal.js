import { BinarySearchTree } from "./binary_search_tree_iterative.js";
import { Queue } from "../stacks_and_queues/queue_linked_list.js";

class BFS extends BinarySearchTree {
  constructor() {
    super();
  }

  // Perform a breadth-first search
  traverse() {
    /** BFS Algorithm
     * Save root node to queue
     * Loop as long as queue has something
     *      Set the node that is to be dequeued
     *
     *      Dequeue the node
     *      Add the dequeud node to visited
     *
     *      If the dequeud node has left, add it to queue
     *      If the dequeud node has right, add it to queue
     * Return visited
     */

    // If it's an empty tree
    if (!this.root) return [];

    // If there is only one item no need to traverse
    if (!this.root.left || !this.root.right) return this;

    const queue = new Queue();
    const visited = [];

    queue.enqueue(this.root);

    while (queue.size) {
      const visitedNode = queue.dequeue();
      visited.push(visitedNode.value);

      if (visitedNode.left) queue.enqueue(visitedNode.left);
      if (visitedNode.right) queue.enqueue(visitedNode.right);
    }

    return visited;
  }

  createSampleTree() {
    this.insert(100);
    this.insert(50);
    this.insert(200);
    this.insert(25);
    this.insert(75);
    this.insert(350);
    return this;
  }

  printTree() {
    function printNode(node, level = 0, prefix = "Root: ") {
      if (node !== null) {
        console.log("  ".repeat(level) + prefix + node.value);
        if (node.left !== null || node.right !== null) {
          printNode(node.left, level + 1, "L: ");
          printNode(node.right, level + 1, "R: ");
        }
      }
    }
    printNode(this.root);
  }
}

const bfs = new BFS();
bfs.createSampleTree();
bfs.printTree();

console.log(bfs.traverse())
