/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

 /*
 P: Given a linked list and number remobe that node from the end of the list 
 E: head = [2,5,6,8,2,0,3,5], n = 3
 return [2,5,6,8,2,3,5]

 D: Linked list

 A: start by creating variable this is gonna keep track of the length of the linkedlist

 C:
 */
var removeNthFromEnd = function(head, n) {
    let linkedLength = 0
    let pointer = head
    while(pointer !== null){
        linkedLength++
        pointer = pointer.next
    }
    let endLinked = linkedLength - n;

    if (endLinked === 0){
        return head.next
    }
    pointer = head
    for(let i = 1; i < endLinked; i++){
        pointer = pointer.next
    }
    pointer.next = pointer.next.next
    return head
    
};

//Time Complexity = o(n)
//Space Complexity = 