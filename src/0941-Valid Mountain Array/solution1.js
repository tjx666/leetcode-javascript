/**
 * 题述：是否为有效的山脉
 * 思路：这道题不难，关键是抠细节
 * 时间复杂度：n
 * 空间复杂度：1
 * @param {number[]} A
 * @return {boolean}
 */
function validMountainArray(A) {
    const { length } = A;
    if (length < 3) {
        return false;
    }

    if (A[1] <= A[0]) return false;

    let isClimbing = true;
    for (let i = 2; i < A.length; i++) {
        if (A[i] === A[i - 1]) return false;

        if (isClimbing && A[i] < A[i - 1]) {
            isClimbing = false;
        } else if (!isClimbing && A[i] > A[i - 1]) {
            return false;
        }
    }

    return !isClimbing;
}
