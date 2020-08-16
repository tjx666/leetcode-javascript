/**
 * 题述：
 * 图像上色，给你一个像素矩阵和一个起始坐标，要求你将和坐标上下左右相邻的像素中和起始位置像素相同的位置也给上色，
 * 然后将所有符合条件的像素也视为起点重复上色操作
 * 思路：这道题首先要搞懂题意，本质就是将一个和起始点相同像素的所有上下左右相邻的位置替换像素，这个查找过程很显然树状的，使用 DFS 很容易理解
 * 时间复杂度：m * n，最耗时的情况就是所有元素都是被替换的元素
 * 空间复杂度：max(m, n)， 取决于递归的深度
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    floodFillRecursive(image, sr, sc, image[sr][sc], newColor);
    return image;
}

function floodFillRecursive(image, sr, sc, sourceColor, newColor) {
    const len2d = image.length;
    const len = image[0].length;
    if (sr < 0 || sr >= len2d || sc < 0 || sc >= len) {
        return;
    }
    const color = image[sr][sc];
    if (color !== sourceColor || color === newColor) {
        return;
    }
    image[sr][sc] = newColor;

    floodFillRecursive(image, sr - 1, sc, sourceColor, newColor);
    floodFillRecursive(image, sr + 1, sc, sourceColor, newColor);
    floodFillRecursive(image, sr, sc - 1, sourceColor, newColor);
    floodFillRecursive(image, sr, sc + 1, sourceColor, newColor);
}
