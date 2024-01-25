/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let fast = head;
    let slow = head; 
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
    }

    let curr = slow
    let prev = null;

    while(curr){
        next = curr.next;
        curr.next = prev
        prev = curr;
        curr = next
    }
    let middle = prev
    while(head && middle){
        
        if(head.val !== middle.val){
            return false
        } 
        head = head.next
        middle = middle.next
    }
    return true
};