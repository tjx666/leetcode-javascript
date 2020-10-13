[![Build Status](https://img.shields.io/travis/tjx666/leetcode-javascript/master?logo=Travis-CI)](https://travis-ci.org/tjx666/leetcode-javascript) [![codecov](https://codecov.io/gh/tjx666/leetcode-javascript/branch/master/graph/badge.svg)](https://codecov.io/gh/tjx666/leetcode-javascript) [![LeetCode Progress](https://img.shields.io/badge/LeetCode-289%20%2F%201726-brightgreen?logo=LeetCode)](https://leetcode-cn.com/u/yutengjing/)

使用 JavaScript 刷 LeetCode

## 同类题

### 求和

- 0002-链表求和（高位在右）
- 0445-链表求和 II（高位在左）
- 0067-二进制数字符串求和
- 0415-十进制数字符串求和
- 0989-数字数组加上一个数

这一类题大都需要要考虑大数导致精度丢失的问题，实际业务中精度丢失更推荐使用 BigInt 来解决，这类题大多可以通过模拟加法计算来解决，需要注意处理进位问题。

### K Sum

- 0001-Two Sum
- 0167-Two Sum II - 数组已经有序
- 1099-比 K 小的两数之和
- 0015-三数之和

对于两数之和，为了达到达到线性复杂度可以考虑使用 map 来保存遍历过程中的信息，在数组已经有序的情况下，可以通过首尾双指针将范围从两头不断缩小。3 数之和可以想办法将其转换为求解两数之和。

### 数字反转

- 0007-反转整数
- 0190-反转二进制位

这一类题目就想办法从低位到高位取到原数字每一位，每取到一位就将结果先乘以进制值再加上这个位，更简单的做法是转换成字符串再反转。

### 滑动窗口

- 0003-无重复字符的最长子串
- 0149-至多包含两个不同字符的最长子串

求满足限定条件的连续字符串通常都可以使用快慢双指针模拟一个滑动窗口来解决。

### 回文判断

- 0009-判断回文数
- 0125-验证回文字符串
- 0680-验证回文字符串 II（允许删除一个字符）
- 0234-判断回文链表

回文数的题目其实可以转换为回文字符串的问题，对于字符串或者是字符数组，判断是否回文一般有三种思路：

1. 首尾双指针
2. 判断反转后的字符串是否和原字符串相同
3. 比较前半段和后半段

判断回文数如果要求不能转换成字符串，可以想办法拿到前半段表示的数和后半段表示的数，这就要求你会取整数的每一位。
判断回文链表有个比较巧妙的方法是利用递归遍历链表是反序遍历的特点。

### 罗马数字

1. 0012-整数转罗马字符串
2. 0013-罗马数字字符串转整数

### 树的序列化和反序列化

1. 0297-二叉树的序列化和反序列化
2. 0428-N 叉树的序列化和反序列化
3. 0449-二叉搜索树的序列化和反序列化
