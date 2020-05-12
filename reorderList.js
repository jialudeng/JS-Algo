/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 * 1) Find the middle point using tortoise and hare method.
 * 2) Split the linked list into two halves using found middle point in step 1.
 * 3) Reverse the second half.
 * 4) Do alternate merge of first and second halves. 
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var reorderList = function(head) {
  let endOfFirst;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
      endOfFirst = slow;
      slow = slow.next;
      fast = fast.next.next;
  }
  if (fast === slow && slow === endOfFirst) {
    return head
  }
  let nextNode = reverseList(slow);
  endOfFirst.next = null;
  while (head && nextNode) {
    let newNextNode = nextNode.next;
    let newHead = head.next;
    head.next = nextNode;
    newHead ? nextNode.next = newHead : nextNode.next
    head = newHead;
    nextNode = newNextNode;
  }

};

var reverseList = function(head) {
  let prev = null;
  let node = head;
  let next;
  while (node) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
  }
  return prev;

}


let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
reorderList(list)
console.log(list)

console.log('hello')