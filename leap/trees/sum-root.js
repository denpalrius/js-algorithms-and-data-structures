/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

 let total;

 /**
  * @param {TreeNode} root
  * @return {number}
  */
 var sumNumbers = function(root) {
     total = 0;
     findSumRoot(root, 0);
     
     return total;
 };
 
 
 function findSumRoot(node, parentVal){    
     if(!node) return;
     
     const rtlNum = parentVal? Number(`${parentVal}${node.val}`) : node.val;
 
     if(!node.left && !node.right){
         total += rtlNum;
     }
 
     findSumRoot(node.left, rtlNum);
     findSumRoot(node.right, rtlNum);
 }