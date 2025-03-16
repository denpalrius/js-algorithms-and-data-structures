
// Level order traversal
function traverseTree(root, accumulator ={} , level = 0) {
  if (root === null) return 0;

  this.root.level = level;

  const leftNodes = traverseTree(root.left, level);
  const rightNodes = traverseTree(root.right, level);

  console.log(`Level: ${level}, ${lef}`)

  return Math.max(leftHeight, rightHeight) + 1;
}


class Node {
  constructor() {
    this.left = null;
    this.right = null;
    this.value = null;
    this.level = null;
  }
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

test(root, 3);

const root2 = null;
test(root2, 0);

const root3 = new Node();
test(root3, 1);
