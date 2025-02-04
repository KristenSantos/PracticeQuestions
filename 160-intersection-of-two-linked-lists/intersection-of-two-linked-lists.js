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
    let lengthA = 0;
    let lengthB = 0;
    let linkedListA = headA;
    let linkedListB = headB;

    // Calculate lengths of both lists
    while (linkedListA) {
        linkedListA = linkedListA.next;
        lengthA++;
    }
    while (linkedListB) {
        linkedListB = linkedListB.next;
        lengthB++;
    }

    // Determine the longer and shorter lists
    let longerList = lengthA > lengthB ? headA : headB;
    let shorterList = lengthA > lengthB ? headB : headA;
    let difference = Math.abs(lengthA - lengthB);

    // Adjust the longer list's pointer to align with the shorter list
    while (difference > 0) {
        longerList = longerList.next;
        difference--;
    }

    // Compare nodes to find the intersection
    while (longerList && shorterList) {
        if (longerList === shorterList) {
            return longerList; // Intersection found
        }
        longerList = longerList.next;
        shorterList = shorterList.next;
    }

    return null; // No intersection
};