/**
 * 题述：旅行车站的终点站
 * 思路：
 * 所有的段路的下车站只有最后的终点站不会是上车站，因此可以两次遍历
 * 第一次遍历将上车站保存到 Set，第二次遍历如果找到一个不在 Set 中的下车站，它便是终点站
 * 时间复杂度：n
 * 空间复杂度：n
 * @param {string[][]} paths
 * @return {string}
 */
function destCity(paths) {
    const { length } = paths;

    const startStations = new Set();
    for (let i = 0; i < length; i++) {
        startStations.add(paths[i][0]);
    }

    for (let i = 0; i < length; i++) {
        const endStation = paths[i][1];
        if (!startStations.has(endStation)) return endStation;
    }

    return null;
}
