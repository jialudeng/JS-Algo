var diameterOfBinaryTree = function(root) {
  let diameter = 1;
  
  function dfs(node) {
      if (!node) return 0;
      let left = dfs(node.left);
      let right = dfs(node.right);
      diameter = Math.max(diameter, left + right + 1);
      return Math.max(left, right) + 1;
  } 
  
  dfs(root);
  return diameter - 1;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.left.right = new TreeNode(9);
tree.left.left.right.left = new TreeNode(10);
tree.left.left.right.left.right = new TreeNode(11);
tree.left.right = new TreeNode(5);
tree.left.right.right = new TreeNode(7);
tree.left.right.right.right = new TreeNode(8);

console.log(diameterOfBinaryTree(tree));
