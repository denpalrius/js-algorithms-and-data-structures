import { Node } from "./tree_node.js";

/**
 * Calculates the height of a binary tree.
 * This function uses recursion to find the maximum height.
 *
 * Algorithm used: Recursion
 *
 * Time complexity: O(n) - linear, where n is the number of nodes.
 * Space complexity: O(h) - where h is the height of the tree (worst case O(n) for skewed trees).
 *
 * @param {Node|null} root - The root node of the binary tree.
 * @returns {number} - The height of the tree.
 */
function treeHeight(root) {
  if (root === null) return 0; // Base case: empty tree has height 0

  const leftHeight = treeHeight(root.left);
  const rightHeight = treeHeight(root.right);

  return Math.max(leftHeight, rightHeight) + 1; // Height is max of subtrees + 1
}

function test(root, expected) {
  const actual = treeHeight(root);
  const result = actual === expected ? "✅ passed" : "🆘 failed";

  console.log(`Test case: ${result} (got ${actual}, expected ${expected})`);
}

// Test cases
const root = new Node();
root.left = new Node();
root.right = new Node();
root.left.left = new Node();

test(root, 3);

const root2 = null;
test(root2, 0);

const root3 = new Node();
test(root3, 1);

const root4 = new Node();
root4.left = new Node();
root4.left.left = new Node();
root4.left.left.left = new Node();

test(root4, 4);

const root5 = new Node();
root5.right = new Node();
root5.right.right = new Node();
root5.right.right.right = new Node();

test(root5, 4);
