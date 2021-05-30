function isBalanced(root: Tree | any): boolean {
  if (!root) return true;

  const leftSubtreeheight = getTreeHeight(root, 0, 0, Direction.none);
}

isTreeBalanced: Boolean;

function getTreeHeight(
  tree: Tree,
  leftHeight: number,
  rightHeight: number,
  direction: Direction
): Treeheights {
  if (tree.left) {
    const leftSubtreeHeight = getTreeHeight(
      tree.left,
      leftHeight,
      rightHeight,
      direction
    );

    leftHeight += leftHeight;
  }

  if (direction === Direction.right && tree.right) {
    const rightSubtreeHeight = getTreeHeight(
      tree.right,
      leftHeight,
      rightHeight,
      Direction.right
    );

    leftHeight += leftHeight;
  }

  return null;
}

interface Treeheights {
  left: number;
  right: number;
}

enum Direction {
  left,
  right,
  none,
}

interface Tree {
  value: number;
  left: Tree;
  right: Tree;
}
