/**
 * 题述：反转图像
 * 思路：水平反转的时候用首尾双指针
 * @param {number[][]} A
 * @return {number[][]}
 */
function flipAndInvertImage(A) {
    const rowCount = A.length;
    if (rowCount === 0) return A;

    const columnCount = A[0].length;
    if (columnCount === 0) return A;

    for (let i = 0; i < rowCount; i++) {
        for (let head = 0, end = columnCount - 1; head <= end; head++, end--) {
            // 当对称的两个小标对应的值不同时，两次取反后和变换前时一样的，所以不用取反
            // 例如 0 1 1
            // 0 和 1 先水平反转取反得 1 1 0，再反转又一次取反，0 0 1，可见 第一个和第三个这俩对称下标得元素复原了
            if (A[i][head] === A[i][end]) {
                // eslint-disable-next-line no-multi-assign
                A[i][head] = A[i][end] = A[i][head] === 0 ? 1 : 0;
            }
        }
    }
    return A;
}
