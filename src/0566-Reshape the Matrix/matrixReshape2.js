/**
 * 题述：重塑矩阵，不能重塑的时候返回原矩阵
 * 思路：新矩阵中确定当前坐标可以使用整除和取模
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

    // 初始化新数组
    // 不能使用new Array(r).fill(new Array(c))，因为那样每一行元素都指向同一个数组：new Array(c)
    const reshapedMatrix = new Array(r);
    for (let i = 0; i < r; i++) {
        reshapedMatrix[i] = new Array(c);
    }

    let index = 0;
    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < columnCount; j++) {
            reshapedMatrix[(index / c) | 0][index % c] = nums[i][j];
            index++;
        }
    }
    return reshapedMatrix;
}
