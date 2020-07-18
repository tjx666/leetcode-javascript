/**
 * 题述：杨辉三角
 * 思路：迭代，动态规划，generate(n) 可以由 generate(n - 1) 推导出
 * 时间复杂度：numRows²
 * 空间复杂度：numRows²
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
    const length = numRows;
    if (length === 0) return [];

    const triangle = [[1]];
    for (let i = 1; i < length; i++) {
        const currentLevel = [1];
        for (let j = 1; j < i; j++) {
            const previousLevel = triangle[i - 1];
            currentLevel[j] = previousLevel[j - 1] + previousLevel[j];
        }
        currentLevel.push(1);
        triangle.push(currentLevel);
    }

    return triangle;
}
module.exports = generate;
