/**
 * 题述：将每个元素替换为右侧最大元素
 * 思路：有时候换个方向遍历问题会很简单，这道题从后往前遍历可以利用之前保存的最大值信息
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} arr
 * @return {number[]}
 */
function replaceElements(arr) {
    let max = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        const currentValue = arr[i];
        arr[i] = max;
        max = Math.max(max, currentValue);
    }
    return arr;
}
