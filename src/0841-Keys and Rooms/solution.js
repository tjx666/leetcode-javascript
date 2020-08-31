/**
 * 题述：钥匙和房间
 * 思路：DFS
 * 时间复杂度：n， n 是房间数量
 * 空间复杂度：n
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
    const visited = new Array(rooms.length).fill(false);
    let visitedCount = 0;
    function dfs(door, key) {
        if (visitedCount === rooms.length) return;
        visited[key] = true;
        visitedCount++;
        for (let i = 0; i < door.length; i++) {
            const currentKey = door[i];
            if (!visited[currentKey]) {
                dfs(rooms[currentKey], currentKey);
            }
        }
    }
    dfs(rooms[0]);
    return visitedCount === rooms.length;
}
