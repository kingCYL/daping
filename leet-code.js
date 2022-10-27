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


1. 给定一组由abcd组成的字符串，分别输出abcd四个字母连续的最高次数
2. 给定一组二进制，0/1翻转，输出最大连续长度
3. 输入10进制，输出大写16进制

