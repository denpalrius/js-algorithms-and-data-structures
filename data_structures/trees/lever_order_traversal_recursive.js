import { Node } from "./binary_search_tree_iterative.js";

function levelOrderTraversalRecursive(root) {
  if (!root) {
    return []; // Return an empty array for empty trees
  }

  const levels = [];

  function traverse(node, level) {
    if (!node) {
      return;
    }

    if (!levels[level]) {
      levels[level] = [];
    }

    levels[level].push(node.value);

    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);

  return levels; // Return the levels array
}

function test(root, expected) {
  const actual = levelOrderTraversalRecursive(root);
  const res =
    JSON.stringify(actual) === JSON.stringify(expected)
      ? "✅ passed"
      : "🆘 failed";

  console.log(
    `Test case: ${res} (got ${JSON.stringify(
      actual
    )}, expected ${JSON.stringify(expected)})`
  );
}

// Test cases
const root = new Node(100);
root.left = new Node(50);
root.right = new Node(200);
root.left.left = new Node(25);
root.left.right = new Node(75);
root.right.right = new Node(350);

test(root, [[100], [50, 200], [25, 75, 350]]);

test(null, []);

const root2 = new Node(10);
test(root2, [[10]]);

const root3 = new Node(1);
root3.left = new Node(2);
root3.left.left = new Node(3);
test(root3, [[1], [2], [3]]);

const root4 = new Node(1);
root4.right = new Node(2);
root4.right.right = new Node(3);
test(root4, [[1], [2], [3]]);

const root6 = new Node(1);
root6.left = new Node(2);
root6.right = new Node(3);
root6.left.left = new Node(4);
root6.right.right = new Node(5);
test(root6, [[1], [2, 3], [4, 5]]);
