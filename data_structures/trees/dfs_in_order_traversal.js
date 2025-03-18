import { BinarySearchTree } from "./binary_search_tree_iterative.js";

class DFS extends BinarySearchTree {
  constructor() {
    super();
  }

  /**
   * Performs an Inorder Depth-First Search (DFS) traversal of the tree.
   * @returns {number[]} An array of node values visited in Inorder DFS order.
   *
   * ### How Inorder DFS Works:
   * 1. Start at the root node.
   * 2. Traverse the left subtree.
   * 3. Visit and store the value of the current node.
   * 4. Traverse the right subtree.
   * 5. Repeat this until all nodes have been visited.
   * 6. The result is a list of node values in the order they were visited.
   */
  inOrderDFS() {
    if (!this.root) return []; // Handle empty tree case

    const visited = [];

    function traverse(node) {
      if (!node) return; // Base case

      if (node.left) traverse(node.left); // Traverse left subtree
      visited.push(node.value); // Visit the current node (after left)
      if (node.right) traverse(node.right); // Traverse right subtree
    }

    traverse(this.root);

    return visited;
  }

}

// Test function
function test(actual, expected, testName) {
  const res = JSON.stringify(actual) === JSON.stringify(expected) ? "✅ passed" : "🆘 failed";
  console.log(`${testName}: ${res} (got ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)})`);
}

// Test Inorder DFS Traversal

// 1. Test balanced tree
const dfsTree = new DFS();
dfsTree.createSampleTree()
console.log("Sample Tree Structure:");
dfsTree.printTree()
test(dfsTree.inOrderDFS(), [25, 50, 75, 100, 200, 350], "Inorder DFS traversal on sample tree");

// 2. Test empty tree
const emptyTree = new DFS();
test(emptyTree.inOrderDFS(), [], "inOrderDFS empty tree");

// 3. Test single node tree
const singleNodeTree = new DFS();
singleNodeTree.insert(100);
test(singleNodeTree.inOrderDFS(), [100], "inOrderDFS single node tree");

// 4. Test balanced tree
const balancedTree = new DFS();
balancedTree.insert(100);
balancedTree.insert(50);
balancedTree.insert(150);
balancedTree.insert(25);
balancedTree.insert(75);
balancedTree.insert(125);
balancedTree.insert(175);
test(balancedTree.inOrderDFS(), [25, 50, 75, 100, 125, 150, 175], "inOrderDFS balanced tree");

// 5. Test left-heavy tree
const leftHeavyTree = new DFS();
leftHeavyTree.insert(100);
leftHeavyTree.insert(90);
leftHeavyTree.insert(80);
leftHeavyTree.insert(70);
test(leftHeavyTree.inOrderDFS(), [70, 80, 90, 100], "inOrderDFS left-heavy tree");

// 6. Test right-heavy tree
const rightHeavyTree = new DFS();
rightHeavyTree.insert(100);
rightHeavyTree.insert(110);
rightHeavyTree.insert(120);
rightHeavyTree.insert(130);
test(rightHeavyTree.inOrderDFS(), [100, 110, 120, 130], "inOrderDFS right-heavy tree");

// 7. Test mixed insert order
const mixedTree = new DFS();
mixedTree.insert(100);
mixedTree.insert(50);
mixedTree.insert(150);
mixedTree.insert(25);
mixedTree.insert(75);
mixedTree.insert(200);
mixedTree.insert(125);
test(mixedTree.inOrderDFS(), [25, 50, 75, 100, 125, 150, 200], "inOrderDFS mixed insert");