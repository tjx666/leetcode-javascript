[![Build Status](https://travis-ci.org/tjx666/leetcode-javascript.svg?branch=master)](https://travis-ci.org/tjx666/leetcode-javascript) [![codecov](https://codecov.io/gh/tjx666/leetcode-javascript/branch/master/graph/badge.svg)](https://codecov.io/gh/tjx666/leetcode-javascript)

使用 JavaScript 刷 LeetCode

## 同类题

### 求和

- 0002-链表求和
- 0445-链表求和 II
- 0067-二进制数字符串求和
- 0415-十进制数字符串求和
- 0989-数字数组加上一个数

这一类题大都需要要考虑大数导致精度丢失的问题，实际业务中精度丢失更推荐使用 BigInt 来解决，这类题大多可以通过模拟加法计算来解决，需要注意处理进位问题。
