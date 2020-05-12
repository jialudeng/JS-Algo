function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = function(head, n) {
    let fast = head;
    let slow = head;
    let counter = n;
    while (counter > 0 && fast) {
        fast = fast.next;
        counter--;
    }
    if (!fast && counter === 0) {
      return head.next;
    } 
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    if (fast && counter === 0) {
      let removedNode = slow.next;
      slow.next = slow.next.next;
      removedNode.next = null;
    } 
    return head;
};

let l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(l1, 5))