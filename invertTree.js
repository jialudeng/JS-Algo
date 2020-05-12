var invertTree = function(root) {
  // if (!root) return root;
  // let left = root.left;
  // let right = root.right;
  // root.right = invertTree(left);
  // root.left = invertTree(right);
  // return root;
  if (!root) return root;
  let queue = [root];
  while (queue.length) {
      let node = queue.shift();
      let temp = node.left;
      node.left = node.right;
      node.right = temp;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
  }
  return root;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree = new TreeNode(4);
tree.left = new TreeNode(2);
tree.right = new TreeNode(7);
tree.left.left = new TreeNode(3);

console.log(invertTree(tree))