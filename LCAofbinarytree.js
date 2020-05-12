function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var lowestCommonAncestor = function(root, p, q) {
  let result = null;
  function recurseTree(node) {
      if (!node) return false;
      let left = recurseTree(node.left);
      let right = recurseTree(node.right);
      let mid = false;
      if (node === p || node === q) {
          mid = true;
      }
      if (left + right + mid >= 2) result = node;
      return mid || left || right;
  }
  recurseTree(root)
  return result;
};



