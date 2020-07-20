/**
 * 题述：在既定时间做作业的学生人数
 * 思路：按部就班
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
function busyStudent(startTime, endTime, queryTime) {
    let count = 0;
    for (let i = 0, len = startTime.length; i < len; i++) {
        if (queryTime >= startTime[i] && queryTime <= endTime[i]) count++;
    }
    return count;
}
