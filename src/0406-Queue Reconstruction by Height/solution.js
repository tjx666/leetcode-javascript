/**
 * 题述：根据身高重建队列
 * 思路：
 * 参考 https://leetcode-cn.com/problems/queue-reconstruction-by-height/solution/xian-pai-xu-zai-cha-dui-dong-hua-yan-shi-suan-fa-g/
 * 其实谈不上什么贪心，按照 h 降序，k 升序后只能有固定的插入方式，并没有选择，贪心需要有选择才能体现：贪
 * 时间复杂度: n²
 * 空间复杂度：n
 * @param {number[][]} people
 * @return {number[][]}
 */
function reconstructQueue(people) {
    people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
    const result = [];
    for (let i = 0; i < people.length; i++) {
        result.splice(people[i][1], 1, people[i]);
    }
    return result;
}
