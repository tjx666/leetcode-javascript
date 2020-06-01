/**
 * 题述：两个二级制数字符串相加求和字符串
 * 思路：
 * 如果是在写业务有这个需求，可以简单的将字符串转成数字进行计算，再把计算结果转成字符串
 * 这里为了处理大数，使用了 BigInt，在 01 字符串前加 0b 前缀表示数字是二进制格式的
 * 最后 toString 的参数 2 表示输出的字符串进制
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    const aNum = BigInt(`0b${a}`);
    const bNum = BigInt(`0b${b}`);
    return (aNum + bNum).toString(2);
}

module.exports = addBinary;
