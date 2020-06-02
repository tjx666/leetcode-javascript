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

### K Sum

- 0001-Two Sum
- 0167-Two Sum II - 数组以及有序
- 1099-比 K 小的两数之和
- 0015-三数之和

对于两数之和，为了达到达到线性复杂度可以考虑使用 map 来保存遍历过程中的信息，在数组已经有序的情况下，可以通过首尾双指针将范围从两头不断缩小。3 数之和可以想办法将其转换为求解两数之和。
