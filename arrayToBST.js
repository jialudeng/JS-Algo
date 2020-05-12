/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0])
  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);
  root.left  = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

console.log(sortedArrayToBST([-10,-3,0,5,9]))