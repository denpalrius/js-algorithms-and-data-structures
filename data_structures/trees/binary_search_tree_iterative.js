class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    /** Insert Pseudocode:
     * If root is null, make newNode to be root
     * Loop until node is added
     *  Make root node as current node
     *  Check if incoming value is equal to currentNode
     *      Decide what to do. Options. Indicate frequency. Or just RETURN
     *  If incoming value is less than currentNode, insert to the left
     *      If currentNode has no left, make newNode the left. RETURN
     *      If currentNode has left node
     *          make left the current node and loop again
     *  Else, if incoming value is greater than currentNode, insert to the right
     *      If currentNode has no right make newNode to be right. RETURN
     *      If root has right node,
     *          make right node the current node and loop again
     */

    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;
    while (true) {
      if (newNode.value === currentNode.value) return undefined;

      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(value) {
    if (!this.root) return undefined;

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }

    return undefined;
  }

  contains(value) {
    if (!this.root) return false;

    let currentNode = this.root;

    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) {
      return undefined; // Tree must have at least two nodes
    }

    let current = this.root;
    let parent = null;

    // Traverse to the rightmost node (largest node)
    while (current.right) {
      parent = current;
      current = current.right;
    }

    // Case 1: The largest node has a left subtree
    // The second largest is the largest value in that left subtree
    if (current.left) {
      let secondLargest = current.left;
      while (secondLargest.right) {
        secondLargest = secondLargest.right;
      }
      return secondLargest.value;
    }

    // Case 2: The largest node has no left subtree
    // The second largest is simply its parent
    return parent.value;
  }

  isBalanced() {
    // Recursive helper function to check the height of subtrees and determine balance.
    function checkHeight(node) {
      // Base case: If the node is null, its height is 0.
      if (!node) return 0;

      let leftHeight = checkHeight(node.left);
      // If the left subtree is unbalanced, propagate the -1 up the call stack.
      if (leftHeight === -1) return -1;

      let rightHeight = checkHeight(node.right);
      // If the right subtree is unbalanced, propagate the -1 up the call stack.
      if (rightHeight === -1) return -1;

      // Check if the heights of the left and right subtrees differ by more than 1.
      if (Math.abs(leftHeight - rightHeight) > 1) return -1;

      // If the subtree is balanced, return its height
      return Math.max(leftHeight, rightHeight) + 1;
    }

    return checkHeight(this.root) !== -1;
  }

  remove(value) {
    let removedNode = null;

    function removeNode(node, value) {
      if (!node) return null;

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } else {
        removedNode = new Node(node.value); // Capture the removed node's value

        if (!node.left && !node.right) return null;
        if (!node.left) return node.right;
        if (!node.right) return node.left;

        let temp = node.right;
        while (temp.left) {
          temp = temp.left;
        }
        node.value = temp.value;
        node.right = removeNode(node.right, temp.value);
        return node;
      }
    }

    this.root = removeNode(this.root, value);
    return removedNode;
  }

  createSampleTree() {
    this.insert(100);
    this.insert(50);
    this.insert(200);
    this.insert(25);
    this.insert(75);
    this.insert(350);
    return this;
  }

  printTree() {
    if (!this.root) console.log("Empty Tree 🏕️");

    function printNode(node, level = 0, prefix = "Root: ") {
      if (node !== null) {
        console.log("  ".repeat(level) + prefix + node.value);
        if (node.left !== null || node.right !== null) {
          printNode(node.left, level + 1, "L: ");
          printNode(node.right, level + 1, "R: ");
        }
      }
    }
    printNode(this.root);
  }

  test() {
    const bst = new BinarySearchTree();
    bst.createSampleTree();
    bst.printTree();
  }
}

// new BinarySearchTree().test();

export { Node, BinarySearchTree };
