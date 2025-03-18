import { Node } from "./tree_node.js";

/**
 * Calculates the size (number of nodes) of a binary tree.
 * This function uses recursion to count all nodes.
 *
 * Algorithm used: Recursion
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(h) - height of the tree (worst case O(n))
 *
 * @param {Node|null} root - The root node of the binary tree
 * @returns {number} - The size of the tree (number of nodes)
 */
function treeSize(root) {
  // Base case: empty tree has size 0
  if (root === null) return 0;

  // Size is 1 (current node) plus sizes of left and right subtrees
  const leftSize = treeSize(root.left);
  const rightSize = treeSize(root.right);

  return 1 + leftSize + rightSize;
}

function test(root, expected) {
  const actual = treeSize(root);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(`Test case: ${res} (got ${actual}, expected ${expected})`);
}

// Test cases
const root = new Node();
root.left = new Node();
root.right = new Node();
root.left.left = new Node();

test(root, 4); // Expected: 4 (root + left + right + left.left = 4 nodes)

const root2 = null;
test(root2, 0); // Expected: 0 (empty tree)

const root3 = new Node();
test(root3, 1); // Expected: 1 (just the root node)
