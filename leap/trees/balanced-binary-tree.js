/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

let balanced = true;
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  if (!root || !root.length) return balanced;

  compareHeights(root, 0);
  return balanced;
};

function compareHeights(node, currentHeight) {
  let leftSubtreeHeight = 0;
  let rightSubtreeHeight = 0;
  
  if (node.left) {
    leftSubtreeHeight = Math.max(
      currentHeight,
      compareHeights(node.left, currentHeight + 1)
    );
  }

  if (node.right) {
    rightSubtreeHeight = Math.max(
      currentHeight,
      compareHeights(node.right, currentHeight + 1)
    );
  }

  console.log(
    `node: ${node.val}, left: ${leftSubtreeHeight}, right: ${leftSubtreeHeight}`
  );

  if (Math.abs(leftSubtreeHeight - rightSubtreeHeight) > 1) {
    balanced = false;
  }

  return Math.max(leftSubtreeHeight, rightSubtreeHeight);
}
