/**
 * 题述：去掉最低工资和最高工资后的工资平均值
 * 条件：
 * 3 <= salary.length <= 100
 * 10^3 <= salary[i] <= 10^6
 * 思路：这道题其实可以就是考你能不能遍历一遍计算出最大和最小值
 * 时间复杂度：n
 * 空间复杂度：0
 * @param {number[]} salary
 * @return {number}
 */
function average(salary) {
    const { length } = salary;
    let max = salary[0];
    let min = salary[0];
    let sum = salary[0];
    for (let i = 1; i < length; i++) {
        if (salary[i] > max) {
            max = salary[i];
        } else if (salary[i] < min) {
            min = salary[i];
        }

        sum += salary[i];
    }
    return (sum - max - min) / (length - 2);
}
