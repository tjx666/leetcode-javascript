/**
 * @param {number[]} bills
 * @return {boolean}
 */
function lemonadeChange(bills) {
    let fiveCount = 0;
    let tenCount = 0;
    let twentyCount = 0;

    for (const bill of bills) {
        if (bill === 5) {
            fiveCount++;
        } else if (bill === 10) {
            if (fiveCount === 0) return false;

            fiveCount--;
            tenCount++;
        } else {
            // eslint-disable-next-line no-lonely-if
            if (tenCount > 0 && fiveCount > 0) {
                tenCount--;
                fiveCount--;
                twentyCount++;
            } else if (fiveCount >= 3) {
                fiveCount -= 3;
                twentyCount++;
            } else {
                return false;
            }
        }
    }
    return true;
}
