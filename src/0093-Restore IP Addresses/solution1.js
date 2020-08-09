/**
 * 题述：
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。
 * 思路：这道题其实是个组合题，做四次决策，由于 ip 的特殊性，需要注意以下几点：
 * 1. 数字需要被拆成 4 部分，这也是递归的退出条件
 * 2. 每一部分最少为 1 个数字，最多为 3 个数字，因此每次做选择可以是选 1 个，选 2 个，选 3 个字符
 * 剪枝策略：
 * 1. 每一部分的数字大小在 0 ~ 255
 * 2. 每一部分不能是 0 开头且长度大于 1，例如 01
 * 3. 剩下的数字必须剩余决策次数
 * 4. 以及大于 3 * 决策次数需要剪枝，前三种可以直接跳过当前和后后续选择，第4 中需要继续
 * 时间复杂度：不会超过 3⁴
 * 空间复杂度：常数级，一个字符串长度最大也就 12，结果数也是有限的，不会超过 3⁴
 * @param {string} s
 * @return {string[]}
 * @example
 *
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 *
 */
function restoreIpAddresses(s) {
    const results = [];
    const ipParts = [];
    function backTrace(start) {
        if (ipParts.length === 4) {
            results.push(ipParts.join('.'));
            return;
        }

        // 选 1~ 3 个字符作为 ip 的一部分
        for (let i = 1; i <= 3; i++) {
            const end = start + i;
            const part = s.slice(start, end);
            const leftCharsCount = s.length - end;
            const leftPartsCount = 4 - ipParts.length - 1;
            if (
                (part[0] === '0' && i > 1) ||
                leftCharsCount < leftPartsCount ||
                parseInt(part, 10) > 255
            ) {
                return;
            }

            if (leftCharsCount < 3 * leftPartsCount) {
                ipParts.push(part);
                backTrace(end);
                ipParts.pop();
            }
        }
    }
    backTrace(0);
    return results;
}
