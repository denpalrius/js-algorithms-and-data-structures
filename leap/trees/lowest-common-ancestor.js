/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;

    // TODO: Check for child
    if (root == p || root == q) return root;

    const nodeFromTheRight = lowestCommonAncestor(root.right, p, q);
    const nodeFromTheleft = lowestCommonAncestor(root.left, p, q);

    if (nodeFromTheRight && nodeFromTheleft) return root;

    if (nodeFromTheRight) return nodeFromTheRight;
    if (nodeFromTheleft) return nodeFromTheleft;
};