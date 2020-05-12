
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var isSubtree = function(s, t) {
  if (!s || !t) return !s && !t;
  if (s.val === t.val && s.left === t.left && s.right === t.right) {
    return isSubtree(s.left, t.left) && isSubtree(s.right, t.right)
  }
  if (!s.left && !s.right && !t.left && !t.right) {
      if (s.val === t.val) {
          return true
      }
      return false
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

function compareTree(a, b) {
  if (!a) return !b;
  if (a.val !== b.val) return compareTree(a.left, b) || compareTree(a.right, b);
  return compareTree(a.left, b.lef) && compareTree(a.right, b.right)
}


var tree1 = new TreeNode(3)
tree1.left = new TreeNode(4);
tree1.right = new TreeNode(5);
tree1.left.left = new TreeNode(1);
tree1.right.left = new TreeNode(2);

var tree2 = new TreeNode(3)
tree2.left = new TreeNode(1)
tree2.right = new TreeNode(2)

console.log(isSubtree(tree1, tree2))