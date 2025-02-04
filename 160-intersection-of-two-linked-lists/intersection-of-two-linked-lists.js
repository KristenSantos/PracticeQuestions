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

    while(linkedListA){
        linkedListA = linkedListA.next;
        lengthA++

    }
    while(linkedListB){
        linkedListB = linkedListB.next;
        lengthB++
    }
    let longerList = lengthA > lengthB ? headA : headB;
    let shorterList = lengthA > lengthB ? headB : headA;
    let difference = Math.max(lengthA, lengthB) - Math.min(lengthA, lengthB)

    while(difference > 0){
            longerList = longerList.next;
            difference--;
    }

    while(longerList && shorterList){

        if(longerList === shorterList){
            return longerList
        }  
        longerList = longerList.next;
        shorterList = shorterList.next;

    }
    return null;
};