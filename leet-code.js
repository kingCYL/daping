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



输入：
["LogSystem","add","add","add","query","delete","delete","query"]
[[],[1,5],[2,5],[3,6],[5,6],[2],[4],[5,6]]
输出： 
[null,null,null,null,3,0,-1,2]
解释： 
第一个操作是初始化，没有返回值；
前三个 Add 操作加入了 ID 为 1、2、3 的日志，timeStamp 分别为 5、5、6；
第一次 Query 操作查询 timeStamp 范围为[5,6]的日志数量，返回 3；
第一次 Delete 操作删除了 ID 为 2 的日志，删除成功，返回 0；
第二次 Delete 操作试图删除 ID 为 4 的日志，没有该日志，操作失败，返回 -1；
最后一次 Query 操作查询 timeStamp 范围为[5,6]的日志数量，由于该范围中已经有一条日志被删除了，故返回 2。 
注：输出中的 null 表示此对应函数无输出（等同于 C 语言的 void 类型）。




输入:
[[8,0], [4,4], [8,1], [5,0], [6,1], [5,2]]
(W,K)W是体重，k是前面有几个人体重大于等于他   

输出:
[[5,0], [8,0], [5,2], [6,1], [4,4], [8,1]]



相同字符串重排，必须间隔 interval 个

input = "xxyyzz", interval = 3

"xyzxyz"

input = "xxxyyz", interval = 3

""
input = "aaazxxyy", interval = 2

"axayaxyz"





