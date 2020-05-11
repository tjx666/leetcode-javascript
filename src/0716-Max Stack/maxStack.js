/**
 * initialize your data structure here.
 */
function MaxStack() {
    this.stack = [];
    this.helperStack = [];
    this.size = 0;
}

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
    this.stack.push(x);
    this.helperStack.push(this.size === 0 ? x : Math.max(this.helperStack[this.size - 1], x));
    this.size++;
};

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
    const top = this.stack.pop();
    this.helperStack.pop();
    if (this.size !== 0) {
        this.size--;
    }
    return top;
};

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
    return this.stack[this.size - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
    return this.helperStack[this.size - 1];
};

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
    if (this.size === 0) return null;
    const currentMax = this.peekMax();
    const tempStack = [];
    let top = this.pop();
    while (top !== currentMax) {
        tempStack.push(top);
        top = this.pop();
    }
    while (tempStack.length !== 0) {
        this.push(tempStack.pop());
    }
    return currentMax;
};

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */
