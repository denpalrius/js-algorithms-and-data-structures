import { Node, BinarySearchTree } from "./binary_search_tree_iterative.js";

function test(actual, expected, testName) {
  const res = `${
    JSON.stringify(actual) === JSON.stringify(expected)
      ? "✅ passed"
      : "🆘 failed"
  }`;
  console.log(
    `${testName}: ${res} (got ${JSON.stringify(
      actual
    )}, expected ${JSON.stringify(expected)})`
  );
}

function treeSize(root) {
  if (!root) return 0;
  return 1 + treeSize(root.left) + treeSize(root.right);
}

// Test BinarySearchTree methods
const bst = new BinarySearchTree();
bst.createSampleTree();

// Test insert
test(treeSize(bst.root), 6, "insert");

// Test insert on an empty tree
const emptyInsertTree = new BinarySearchTree();
emptyInsertTree.insert(100);
test(emptyInsertTree.root.value, 100, "insert into empty tree");

// Test insert into a tree with one node
const singleNodeTree = new BinarySearchTree();
singleNodeTree.insert(100);
singleNodeTree.insert(50);
test(singleNodeTree.root.left.value, 50, "insert into single-node tree (left child)");

singleNodeTree.insert(150);
test(singleNodeTree.root.right.value, 150, "insert into single-node tree (right child)");

// Test insert values in descending order (left-heavy)
const leftHeavyTree = new BinarySearchTree();
leftHeavyTree.insert(100);
leftHeavyTree.insert(90);
leftHeavyTree.insert(80);
leftHeavyTree.insert(70);
test(leftHeavyTree.root.left.left.left.value, 70, "insert descending order");

// Test insert values in ascending order (right-heavy)
const rightHeavyTree = new BinarySearchTree();
rightHeavyTree.insert(100);
rightHeavyTree.insert(110);
rightHeavyTree.insert(120);
rightHeavyTree.insert(130);
test(rightHeavyTree.root.right.right.right.value, 130, "insert ascending order");

// Test inserting a mix of values
const mixedInsertTree = new BinarySearchTree();
mixedInsertTree.insert(100);
mixedInsertTree.insert(50);
mixedInsertTree.insert(150);
mixedInsertTree.insert(25);
mixedInsertTree.insert(75);
mixedInsertTree.insert(125);
mixedInsertTree.insert(175);
test(treeSize(mixedInsertTree.root), 7, "insert mixed values");

// Test find
test(bst.find(75).value, 75, "find existing");
test(bst.find(1000), undefined, "find non-existing");

// Test contains
test(bst.contains(50), true, "contains existing");
test(bst.contains(1000), false, "contains non-existing");

// Test findSecondLargest
test(bst.findSecondLargest(), 200, "findSecondLargest");

// Test isBalanced
test(bst.isBalanced(), true, "isBalanced");

// Test remove
bst.remove(75);
test(bst.contains(75), false, "remove existing");
test(treeSize(bst.root), 5, "remove size check");

// Test remove root
const bst2 = new BinarySearchTree();
bst2.insert(100);
bst2.insert(50);
bst2.insert(200);
bst2.insert(25);
bst2.insert(75);
bst2.insert(350);
bst2.remove(100);
test(bst2.contains(100), false, "remove root");

// Test remove leaf
const bst3 = new BinarySearchTree();
bst3.insert(100);
bst3.insert(50);
bst3.insert(200);
bst3.insert(25);
bst3.insert(75);
bst3.insert(350);
bst3.remove(350);
test(bst3.contains(350), false, "remove leaf");

// Test remove node with single child
const bst4 = new BinarySearchTree();
bst4.insert(100);
bst4.insert(50);
bst4.insert(200);
bst4.insert(25);
bst4.insert(75);
bst4.insert(350);
bst4.remove(200);
test(bst4.contains(200), false, "remove node with single child");

// Test remove node with two children
const bst5 = new BinarySearchTree();
bst5.insert(100);
bst5.insert(50);
bst5.insert(200);
bst5.insert(25);
bst5.insert(75);
bst5.insert(350);
bst5.remove(50);
test(bst5.contains(50), false, "remove node with two children");

// Test isBalanced on an unbalanced tree
const unbalancedTree = new BinarySearchTree();
unbalancedTree.insert(1);
unbalancedTree.insert(2);
unbalancedTree.insert(3);
test(unbalancedTree.isBalanced(), false, "isBalanced unbalanced");

// Test isBalanced on an empty tree
const emptyTree = new BinarySearchTree();
test(emptyTree.isBalanced(), true, "isBalanced empty");
