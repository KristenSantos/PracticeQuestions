/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 
 */
 /*
 P:Give 2 sorted linked list return 1 sorted linked list

 E: list1 = [1,4,5,7] list2 = [0, 1, 3, ,8, 9]
 output = [0, 1, 1, 3, 4, 5, 7, 8, 9]

 D: Linked List 

 A: Start by iterating throou

 C:
 */
var mergeTwoLists = function(list1, list2) {
    let linkedList = new ListNode(0);
    let current = linkedList;

    while(list1 && list2){
        if(list1.val <= list2.val){
            current.next = list1
            list1 = list1.next
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    if(list1 !== null){
        current.next = list1
    } else {
        current.next = list2
    }
    return linkedList.next
};