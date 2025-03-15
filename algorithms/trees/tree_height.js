/**
 * Calculates the height of a binary tree.
 * This function uses recursion to find the maximum height.
 *
 * Algorithm used: Recursion
 *
 * Time complexity - O(n) - linear
 * Space complexity - O(h) - height of the tree (worst case O(n))
 *
 * @param {Node|null} root - The root node of the binary tree
 * @returns {number} - The height of the tree
 */
function treeHeight(root) {
  // Base case: empty tree has height 0
  if (root === null) return 0;

  // Recursively calculate height of left and right subtrees
  const leftHeight = treeHeight(root.left);
  const rightHeight = treeHeight(root.right);

  // Height is the maximum of left and right subtree heights, plus 1 for current level
  return Math.max(leftHeight, rightHeight) + 1;
}

/**
 * Represents a node in a binary tree.
 */
class Node {
  constructor() {
    this.left = null;
    this.right = null;
  }
}

function test(root, expected) {
  const actual = treeHeight(root);
  const res = `${actual === expected ? "✅ passed" : "🆘 failed"}`;

  console.log(`Test case: ${res} (got ${actual}, expected ${expected})`);
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
