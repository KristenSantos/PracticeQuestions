/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let current = head;
    let current2 = head;
    let counter = 0; 
    while(current){
        counter++
        current = current.next
    }
    let counter2 = 0

        while(counter2 < parseInt(counter/2) ){
            console.log(parseInt(counter/2))
        counter2++
        current2 = current2.next;
    }

    return current2
    
};