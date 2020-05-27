/**
 * 题述：数组的度
 * 思路：
 * 理论上是可以在线性复杂度解决，这道题要想得出结果是必须遍历到最后的
 * 为了保存之前遍历时的信息，一种方式是修改原数组，另一种方式就是使用额外空间
 * 前者暂时没思路，这里采用 map 来保存遍历信息
 * 时间复杂度：n，n 为 nums 长度
 * 空间复杂度：n
 * @param {number[]} nums
 * @return {number}
 */
function findShortestSubArray(nums) {
    const map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        const val = nums[i];
        if (!map.has(val)) {
            map.set(val, {
                count: 1,
                start: i,
                end: i,
            });
        } else {
            const info = map.get(val);
            info.count++;
            info.end = i;
        }
    }

    let maxRepeatCount = -Infinity;
    let degree = Infinity;
    for (const info of map.values()) {
        if (info.count === maxRepeatCount) {
            degree = Math.min(degree, info.end - info.start + 1);
        } else if (info.count > maxRepeatCount) {
            maxRepeatCount = info.count;
            degree = info.end - info.start + 1;
        }
    }

    return degree;
}
