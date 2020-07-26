/**
 * 题述：
 * 在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。
 * 移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。
 * 如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。
 * 注意：机器人“面朝”的方向无关紧要。 “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。
 * 思路：机器人能够返回原点的条件就是 x 轴的偏移量总和和 y 轴偏移量总和都为 0，这是一道数学题
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {string} moves
 * @return {boolean}
 * @example
 *
 * Input: "UD"
 * Output: true
 *
 * Input: "LL"
 * Output: false
 *
 */
function judgeCircle(moves) {
    let xSum = 0;
    let ySum = 0;
    for (let i = 0, len = moves.length; i < len; i++) {
        const direction = moves[i];
        switch (direction) {
            case 'U':
                ySum++;
                break;
            case 'D':
                ySum--;
                break;
            case 'L':
                xSum--;
                break;
            case 'R':
                xSum++;
                break;
            default:
                break;
        }
    }
    return xSum === 0 && ySum === 0;
}
