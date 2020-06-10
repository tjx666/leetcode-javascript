/**
 * 题述：原题嗦了一大堆，其实就是让你比较排序后和排序前位置不同的元素的个数
 * 时间复杂度：取决去排序时间复杂度
 * 空间复杂度：取决于排序空间复杂度
 * @param {number[]} heights
 * @return {number}
 */
function heightChecker(heights) {
    const sortedHeights = [...heights].sort((a, b) => a - b);
    let count = 0;
    for (let i = 0, { length } = heights; i < length; i++) {
        if (sortedHeights[i] !== heights[i]) {
            count++;
        }
    }
    return count;
}
