/**
 * 题述：有序数组找两数之和等于目标数组的小标，下标从 1 开始
 * 思路：有序的情况下，使用首尾双指针
 * 时间复杂度：n，n 为数组长度
 * 空间复杂度：0
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let head = 0;
    let tail = numbers.length - 1;

    while (head < tail) {
        if (numbers[head] + numbers[tail] === target) return [head + 1, tail + 1];
        numbers[head] + numbers[tail] > target ? --tail : ++head;
    }
}
