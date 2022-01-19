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
var reverseList = function(head) {
    if(!head || !head.next) return head
    // 递归
    // let pre = head,cur = head.next
    // let p = reverseList(head.next)

    // pre.next = null
    // cur.next = pre

    // return p 

    let pre = null,cur = head
    // 迭代
    while(cur){
        let temp = cur.next
        cur.next = pre
        pre = cur
        cur = temp
    }

    return pre
};
