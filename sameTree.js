/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!check(p, q)) return false;
  let queue1 = [p];
  let queue2 = [q];
  while (queue1.length > 0) {
      let length = queue1.length;
      for (let i = 0; i < length; i++) {
          let pNode = queue1.pop();
          let qNode = queue2.pop();
          if (!check(pNode, qNode)) return false;
          queue1.concat([pNode.left, pNode.right]);
          queue2.concat([qNode.left, qNode.right]);
      }
  }
  return true;
};

function check(p, q) {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return true;
}

function Tree(val) {
  this.val = val;
  this.left = this.right = null;
}

var tree1 = new Tree(1);
var tree2 = new Tree(1);
tree2.left = new Tree(2);
tree2.right = new Tree(3);
isSameTree(tree1, tree2);