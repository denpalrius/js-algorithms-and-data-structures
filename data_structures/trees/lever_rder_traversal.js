import { Node } from "./binary_search_tree_iterative.js";

function levelOrderTraversal(root) {
  if (!root) {
    return;
  }

  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;
    const levelValues = [];

    for (let i = 0; i < levelSize; i++) {
      const currentNode = queue.shift();
      levelValues.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }

    console.log(levelValues.join(", "));
  }
}

// Create the binary tree
const root = new Node(100);
root.left = new Node(50);
root.right = new Node(200);
root.left.left = new Node(25);
root.left.right = new Node(75);
root.right.right = new Node(350);

// Perform level order traversal
levelOrderTraversal(root);
