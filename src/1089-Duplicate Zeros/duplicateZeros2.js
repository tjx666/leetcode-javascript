/**
 * 思路：
 * 暴力法的效率比较低是因为有些节点移动了多次，所以可以想办法优化一下让需要移动的节点只移动一次
 * 但是第一次遍历的时候，你并不知道某个节点是需要移动一位还是多位，所以需要先遍历一次获取一些信息
 * 这道题其实只需要获取到数组中有几个零，就可以从后往前一次遍历就将元素移动到对应位置
 * 时间复杂度：n，遍历两遍 2n，线性复杂度
 * 空间复杂度：1，没有使用额外空间
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
function duplicateZeros(arr) {
    const { length } = arr;

    // 扫描一遍获取保留下的 0 的个数，
    let zeroCount = 0;
    let i = 0;
    // 只需要遍历到 length - zeroCount，后面的节点都被挤掉了
    for (; i < length - zeroCount; i++) {
        if (arr[i] === 0) zeroCount++;
    }

    // 减一获取最后下标
    i--;
    // 如果最后的是 0 并且这个 0 是最后一个，这个 0 不需要复制
    // 例如：[0, 1, 0, 2]
    // 需要单独处理
    const isLastZeroNeedNotCopy = arr[i] === 0 && i + zeroCount > length - 1;
    let j = length - 1;
    if (isLastZeroNeedNotCopy) {
        zeroCount--;
        arr[length - 1] = 0;
        j = length - 2;
    }
    for (; j >= 0 && zeroCount > 0; j--) {
        arr[j] = arr[j - zeroCount];
        if (arr[j - zeroCount] === 0) {
            j--;
            arr[j] = 0;
            zeroCount--;
        }
    }
}
