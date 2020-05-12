function Tree(val) {
  this.val = val;
  this.left = this.right = null;
}

var mergeTrees = function(t1, t2) {
  let queue = [t1, t2];
  while (queue.length > 0) {
      let node1 = queue.unshift();
      let node2 = queue.unshift();
      if (!node1 || !node2) {
        continue
      } else {
          node1.val = node1.val + node2.val;
      }
      queue.push(node1.left);
      queue.push(node2.left);
      queue.push(node1.right);
      queue.push(node2.right);
  }
  return t1;
};

let tree1 = new Tree(1);
tree1.right = new Tree(3);
let tree2 = new Tree(2);
tree2.left = new Tree(5);
console.log(mergeTrees(tree1, tree2))