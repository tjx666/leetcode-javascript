/**
 * 题述：公交站间的距离
 * 思路：考察抽象思维和边界情况处理吧，注意 start 也可能大于 destination
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
function distanceBetweenBusStops(distance, start, destination) {
    // pre 表示 start, destination 中更小的那个
    let pre = start;
    let back = destination;
    if (start < destination) {
        [pre, back] = [back, pre];
    }

    let path1Distance = 0;
    for (let i = pre; i < back; i++) {
        path1Distance += distance[i];
    }

    let path2Distance = 0;
    // 也可能 pre 就是 0
    for (let i = 0; i < distance.length; i = i === pre - 1 || i === pre ? back : i + 1) {
        if (i !== pre) path2Distance += distance[i];
    }

    return Math.min(path1Distance, path2Distance);
}
