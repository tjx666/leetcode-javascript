/**
 * 题述：
 * 给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。
 * 注意：请不要在超过该数组长度的位置写入元素。
 * 要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。
 * 思路：
 * 最简单的暴力法，遍历到 0 就将 0 和后面节点后移一位，
 * 注意到题目中说不要在超出长度位置写入元素，所以最后一个节点是要被丢弃的。
 * 后移的时候是需要从后往前每一个节点覆盖后一个节点，从前往后那就直接把后面需要移动的元素覆盖了
 * 时间复杂度：n²，两层循环
 * 空间复杂度：1，没有使用额外空间
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] === 0) {
            for (let j = len - 1; j >= i; j--) {
                arr[j] = arr[j - 1];
            }
            i++;
        }
    }
}
