/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let ans = new TreeNode(0);
  let cur = ans;
  function inOrder(node) {
      if (!node) return;
      inOrder(node.left);
      node.left = null;
      cur.right = node;
      cur = node;
      inOrder(node.right);
  }
  inOrder(root);
  return ans.right;

};





/*
traverse the tree, save all values into a array
sort the array from low to high
rehydrate a tree from the lowest to highest


*/