/**
 * 题述：视频拼接，返回能够拼接成完成完整的最少段数
 * 思路：贪心，每次取小于当前值的区间的有边界最大的区间
 * 时间复杂度: nlogn，需要对 clips 先排序
 * 空间复杂度：常数级
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
function videoStitching(clips, T) {
    clips.sort((a, b) => a[0] - b[0]);

    if (clips[0][0] !== 0) return -1;
    let ans = 0;
    let maxRight = 0;
    let i = 0;
    while (maxRight < T) {
        let temp = maxRight;
        let j = i;
        for (; j < clips.length && clips[j][0] <= maxRight; j++) {
            temp = Math.max(temp, clips[j][1]);
        }

        if (temp === maxRight) return -1;
        maxRight = temp;
        ans++;
        i = j;
    }

    return ans;
}
