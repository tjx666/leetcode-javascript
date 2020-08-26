/* eslint-disable prefer-destructuring */
/**
 * 题述：合并区间
 * 思路：按左端点排序
 * 时间复杂度：nlgn
 * 空间复杂度：n
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
    const { length } = intervals;
    if (length <= 1) return intervals;

    intervals.sort((interval1, interval2) =>
        interval1[0] === interval2[0] ? interval2[1] - interval2[1] : interval1[0] - interval2[0],
    );
    const merged = [intervals[0]];
    for (let fast = 1; fast < length; fast++) {
        const preInterval = merged[merged.length - 1];
        const interval = intervals[fast];
        if (interval[0] <= preInterval[1]) {
            preInterval[1] = Math.max(preInterval[1], interval[1]);
        } else {
            merged.push(interval);
        }
    }
    return merged;
}
