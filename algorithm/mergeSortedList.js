/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
    // not allowed in some cases
    // const result = [...l1, ...l2];
    // return result.sort();

    let output = new ListNode(0);
    let tempHead = output;

    while (l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            tempHead.next = l1;
            l1 = (l1 != null) ? l1.next : null;
        } else {
            tempHead.next = l2;
            l2 = (l2 != null) ? l2.next : null;
        }

        tempHead = tempHead.next;
    }

    tempHead.next = (l1 != null) ? l1 : l2;

    return output.next;
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));

// This is not a hard problem, only curveball is that you're given a linked list rather then normal arrays.

// but still, just compare, element by element and add the element to your returned list, also keep track of moving the pointer forward, and remembering the initial reference to the new list.

// Bonus, if I had more time i'd pay will reusing one of the initial lists (the one with the smallest value), and keeping track of pointers to add the other lists elements to it, so I didn't have to create a new return list.
var mergeTwoLists = function (l1, l2) {
    if (l1 == null) return l2;
    if (l2 == null) return l1;
    let newList;
    let start
    while (l1 !== null && l2 !== null) {
        if (!start) {
            start = newList = new ListNode();
        } else {
            newList.next = new ListNode();
            newList = newList.next;
        }
        if (l1.val < l2.val) {
            newList.val = l1.val;
            l1 = l1.next;
        } else {
            newList.val = l2.val;
            l2 = l2.next;
        }
    }
    if (l1 != null)
        newList.next = l1;
    if (l2 != null)
        newList.next = l2;
    return start;
};