/**
 * 题述：
 *
 * 矩形以列表 [x1, y1, x2, y2] 的形式表示，其中 (x1, y1) 为左下角的坐标，(x2, y2) 是右上角的坐标。
 * 如果相交的面积为正，则称两矩形重叠。需要明确的是，只在角或边接触的两个矩形不构成重叠。
 * 给出两个矩形，判断它们是否重叠并返回结果。
 *
 * 思路：
 * 反证法，证明是否相交，可以转换成判断哪些情况不相交
 * 参考：https://www.jianshu.com/p/aee1fa12a193
 *
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 * @example
 *
 * 输入：rec1 = [0,0,2,2], rec2 = [1,1,3,3]
 * 输出：true
 *
 */
function isRectangleOverlap(rec1, rec2) {
    const isSeparated =
        rec2[1] >= rec1[3] || rec2[3] <= rec1[1] || rec2[2] <= rec1[0] || rec2[0] >= rec1[2];
    return !isSeparated;
}

/*
                                x1 y1 x2 y2  x1  y1 x2 y2
console.log(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]));

*
* a b
* * * *

*/
