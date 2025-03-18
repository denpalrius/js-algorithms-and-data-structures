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

  insert(value, node = this.root) {
    // Base case: empty tree
    if (!this.root) {
      this.root = new Node(value);
      return this;
    }

    // Base case: node is null (reached insertion point)
    if (!node) return new Node(value);

    // Value already exists
    if (value === node.value) return undefined;

    // Recursive insertion in the correct subtree
    if (value < node.value) {
      node.left = this.insert(value, node.left);
    } else {
      node.right = this.insert(value, node.right);
    }

    // Return the unchanged node pointer
    return node === this.root ? this : node;
  }

  find(value, node = this.root) {
    // Base case: empty tree or reached end of branch
    if (!node) return undefined;

    // Base case: found the value
    if (value === node.value) return node;

    // Recursive case: go left or right
    if (value < node.value) {
      return this.find(value, node.left);
    } else {
      return this.find(value, node.right);
    }
  }

  contains(value, node = this.root) {
    // Base case: empty tree or reached end of branch
    if (!node) return false;

    // Base case: found the value
    if (value === node.value) return true;

    // Recursive case: go left or right
    if (value < node.value) {
      return this.contains(value, node.left);
    } else {
      return this.contains(value, node.right);
    }
  }

  isBalanced() {
    function checkHeight(node) {
      if (!node) return 0;

      let leftHeight = checkHeight(node.left);
      if (leftHeight === -1) return -1;

      let rightHeight = checkHeight(node.right);
      if (rightHeight === -1) return -1;

      if (Math.abs(leftHeight - rightHeight) > 1) return -1;

      return Math.max(leftHeight, rightHeight) + 1;
    }

    return checkHeight(this.root) !== -1;
  }
}
