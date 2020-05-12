/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let endA = null;
  let endB = null;
  let pointerA = headA;
  let pointerB = headB;
  if (!headA || !headB) return null;
  while (pointerA !== pointerB) {
    if (!pointerA.next && pointerB.next) {
        endA ? endA : endA = pointerA.val;
        pointerA = headB;
        pointerB = pointerB.next;
    } else if (!pointerB.next && pointerA.next) {
        endB ? endB : endB = pointerB.val;
        pointerB = headA;
        pointerA = pointerA.next;
    } else if (!pointerA.next && !pointerB.next) {
        endA ? endA : endA = pointerA.val;
        endB ? endB : endB = pointerB.val;
        return endA === endB;
    } else if (endA && endB && (endA !== endB)) {
        return null;
    } else {
        pointerA = pointerA.next;
        pointerB = pointerB.next;
    }

  }
  return pointerA && pointerB ? pointerA : null; 
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var list1 = new ListNode(2);
list1.next = new ListNode(6);
list1.next.next = new ListNode(4);

var list2 = new ListNode(1);
list2.next = new ListNode(5);

console.log(getIntersectionNode(list1, list2))



/*
1,3,5,7,9,11
2,4,9,11


*/