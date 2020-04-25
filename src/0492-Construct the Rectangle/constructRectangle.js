/**
 * 题述：固定面积，求长和宽最小的组合
 * 思路：从平方根得整数值开始递减
 * 时间复杂度：假设 area 为 n，最差得情况下 n 是个质数，只能被 1 和自身整除，此时需要遍历∫n
 * 空间复杂度：0
 * @param {number} area
 * @return {number[]}
 */
function constructRectangle(area) {
    let W = Math.sqrt(area) | 0;
    while (W >= 1) {
        if (area % W === 0) {
            return [(area / W) | 0, W];
        }
        W--;
    }
}
