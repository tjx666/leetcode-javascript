/**
 * 题述：重塑矩阵，不能重塑的时候返回原矩阵
 * 思路：使用 k, l 两个下标保存新矩阵的下标，遍历原矩阵，将每个元素插到新矩阵并调整 k, l
 * 时间复杂度：m * n，m, n 分别表示原矩阵长宽，需要遍历每一个元素
 * 空间复杂度：m * n，存放重塑后的矩阵，和原矩阵占用的空间一样大
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(nums, r, c) {
    const rowCount = nums.length;
    if (rowCount === 0) return nums;
    const columnCount = nums[0].length;
    if (columnCount === 0 || r * c !== rowCount * columnCount) return nums;

    const reshapedMatrix = new Array(r);
    let k = 0;
    let l = 0;
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < columnCount; j++) {
            if (l === 0) {
                reshapedMatrix.push(new Array(c));
            }

            reshapedMatrix[k][l] = nums[i][j];
            l++;
            if (l === c) {
                l = 0;
                k++;
            }
        }
    }
    return reshapedMatrix;
}
