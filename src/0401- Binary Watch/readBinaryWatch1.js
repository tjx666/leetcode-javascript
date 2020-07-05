/**
 * 题述：二进制手表
 * 思路：回溯，本质就是穷举，但是要尽可能剪枝
 * @param {number} num
 * @return {string[]}
 */
function readBinaryWatch(num) {
    // 亮灯的个数不可能超过 9，小时的灯最多亮 3 个，分钟最多亮 5 个
    if (num > 8) return [];

    const times = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];
    const results = [];
    let hours = 0;
    let minutes = 0;

    function backTrace(start) {
        // 退出条件
        if (num === 0) {
            if (hours <= 11 && minutes <= 59) {
                // 注意分钟不满 10 需要补 0
                results.push(`${hours}:${minutes.toString().padStart(2, '0')}`);
            }
            return;
        }

        // i 只需要遍历到 length - num
        for (let i = start; i <= times.length - num; i++) {
            if (i < 4) {
                hours += times[i];
            } else {
                minutes += times[i];
            }
            num--;
            backTrace(i + 1);
            if (i < 4) {
                hours -= times[i];
            } else {
                minutes -= times[i];
            }
            num++;
        }
    }
    backTrace(0);

    return results;
}
