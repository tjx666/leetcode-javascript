/**
 * 题述：
 * 给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。
 * 假设只有一个重复的整数，找出这个重复的数。
 * 思路：
 * 由于值在 1 ~ n，我们可以将数组看成一个链表，每个元素值看成下一个节点的下标，重复值指向了同一个节点，问题就变成了找链表的环的入口
 * 和 0142-Linked List Cycle II 类似，重复数代表同一个地址，指向环的入口
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
    let fast = 0;
    let slow = 0;
    while (true) {
        fast = nums[nums[fast]];
        slow = nums[slow];

        if (fast === slow) {
            slow = 0;
            while (slow !== fast) {
                fast = nums[fast];
                slow = nums[slow];
            }
            return slow;
        }
    }
}
