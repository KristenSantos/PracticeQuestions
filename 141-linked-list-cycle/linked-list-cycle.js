/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

 /*
 P: Check and see if the linked list given has a cycle 
 E:

 */
var hasCycle = function(head) {
    let fast = head;
    let slow = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next
        if (fast === slow){
            return slow
        }
    }
    return false

};