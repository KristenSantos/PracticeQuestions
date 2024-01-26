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
    let current = slow;
    let prev = null;
    while(current){
        let next = current.next;
        current.next = prev
        prev = current;
        current = next
    }
    while(prev){
        if(head.val !== prev.val){
            return false
        }
        prev = prev.next
        head = head.next
    }
    return true

};