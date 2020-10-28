/**
 * 题述：数组中的最长山脉
 * 思路：这道题没什么难的，就是考虑细心程度，分支判断比较多
 * 时间复杂度：n
 * 空间复杂度：常数级
 * @param {number[]} A
 * @return {number}
 */
function longestMountain(A) {
    let maxMountainLen = 0;
    let leftFoot = 0;
    let hasTop = false;

    for (let i = 1; i < A.length; i++) {
        // 到过山顶但是大于前一个数
        if (A[i] > A[i - 1] && hasTop) {
            maxMountainLen = Math.max(maxMountainLen, i - leftFoot);
            // 注意左山脚是 i -1
            leftFoot = i - 1;
            hasTop = false;
            continue;
        }

        if (A[i] === A[i - 1]) {
            if (hasTop) {
                maxMountainLen = Math.max(maxMountainLen, i - leftFoot);
                // 注意左山脚是 i
                leftFoot = i;
            } else {
                leftFoot = i;
            }
            hasTop = false;
            continue;
        }

        // 小于前一个数的时候分两种情况讨论
        if (A[i] < A[i - 1]) {
            // 是山脚后的第一个数是构成不了山脉的
            if (i === leftFoot + 1) {
                leftFoot = i;
            } else if (!hasTop) {
                hasTop = true;
            }
        }
    }

    // 可能尾巴部分还能构成山脉
    if (hasTop) {
        maxMountainLen = Math.max(maxMountainLen, A.length - leftFoot);
    }

    return maxMountainLen;
}
