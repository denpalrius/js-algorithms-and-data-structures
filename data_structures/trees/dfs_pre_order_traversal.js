import { BinarySearchTree } from "./binary_search_tree_iterative.js";

class DFS extends BinarySearchTree {
  constructor() {
    super();
  }

  /**
   * Performs a Preorder Depth-First Search (DFS) traversal of the tree.
   * @returns {number[]} An array of node values visited in Preorder DFS order.
   *
   * ### How Preorder DFS Works:
   * 1. Start at the root node.
   * 2. Visit and store the value of the current node.
   * 3. Move to the left child and repeat the process.
   * 4. When there are no more left children, backtrack and move to the right child.
   * 5. Repeat this until all nodes have been visited.
   * 6. The result is a list of node values in the order they were visited.
   */
  preOrderDFS() {
    if (!this.root) return []; // Handle empty tree case

    const visited = [];

    function traverse(node) {
      if (!node) return; // Base case

      visited.push(node.value); // Visit the current node

      if (node.left) traverse(node.left); // Traverse left subtree
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

// Test Preorder DFS Traversal

// 1. Test balanced tree
const dfsTree = new DFS();
dfsTree.createSampleTree();
console.log("Sample Tree Structure:");
dfsTree.printTree()
test(dfsTree.preOrderDFS(), [100, 50, 25, 75, 200, 350], "DFS traversal on sample tree");

// 2. Test empty tree
const emptyTree = new DFS();
test(emptyTree.preOrderDFS(), [], "preOrderDFS empty tree");

// 3. Test single node tree
const singleNodeTree = new DFS();
singleNodeTree.insert(100);
test(singleNodeTree.preOrderDFS(), [100], "preOrderDFS single node tree");

// 4. Test balanced tree
const balancedTree = new DFS();
balancedTree.insert(100);
balancedTree.insert(50);
balancedTree.insert(150);
balancedTree.insert(25);
balancedTree.insert(75);
balancedTree.insert(125);
balancedTree.insert(175);
test(balancedTree.preOrderDFS(), [100, 50, 25, 75, 150, 125, 175], "preOrderDFS balanced tree");

// 5. Test left-heavy tree
const leftHeavyTree = new DFS();
leftHeavyTree.insert(100);
leftHeavyTree.insert(90);
leftHeavyTree.insert(80);
leftHeavyTree.insert(70);
test(leftHeavyTree.preOrderDFS(), [100, 90, 80, 70], "preOrderDFS left-heavy tree");

// 6. Test right-heavy tree
const rightHeavyTree = new DFS();
rightHeavyTree.insert(100);
rightHeavyTree.insert(110);
rightHeavyTree.insert(120);
rightHeavyTree.insert(130);
test(rightHeavyTree.preOrderDFS(), [100, 110, 120, 130], "preOrderDFS right-heavy tree");

// 7. Test mixed insert order
const mixedTree = new DFS();
mixedTree.insert(100);
mixedTree.insert(50);
mixedTree.insert(150);
mixedTree.insert(25);
mixedTree.insert(75);
mixedTree.insert(200);
mixedTree.insert(125);
test(mixedTree.preOrderDFS(), [100, 50, 25, 75, 150, 125, 200], "preOrderDFS mixed insert");
