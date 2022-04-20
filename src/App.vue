<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

[class*='sr-icon-'] {
  display: block;
  width: 40px;
  height: 40px;
  font-style: normal;
}
</style>

0. 时间复杂度，空间复杂度
  时间：是指执行当前算法所消耗的时间
  空间：是指执行当前算法需要占用多少内存空间

  https://zhuanlan.zhihu.com/p/50479555

1. 栈，队列
  扩展知识点：线性结构，线性表
  栈：只能在栈顶操作，后进先出 LIFO(Last-In-First-Out）/先进后出 FILO
  队列：一端入，一端出，先进先出（FIFO） 

2. dfs
  深度优先搜索（Depth First Search）
  可以从多点发起，对每一个可能的分支路径深入到不能再深入为止，而且每个节点只能访问一次
  使用（递归/回溯)实现深度优先搜索
  https://blog.csdn.net/weixin_44260459/article/details/121711821

3. bfs
  广度优先搜索
  从根节点开始，沿着树的宽度遍历树的节点。所有节点均被访问，则算法终止。BFS是一种盲目搜索，系统的展开并检查图中所有的节点
  适用于求最短、最长路径等问题
  https://blog.csdn.net/qq_30280271/article/details/115508717

4. 二分查找
  折半查找（Binary Search）
  它是一种效率较高的查找方法。但是，折半查找要求线性表必须采用顺序存储结构，而且表中元素按关键字有序排列
  
5. 滑动窗口算法
  滑动窗⼝算法在⼀个特定⼤⼩的字符串或数组上进⾏操作，
  ⽽不在整个字符串和数组上操作，这样就降低了问题的复杂度，从⽽也达到降低了循环的嵌套深度
  主要应用在数组和字符串上,是一种思想，而非某种数据结构的使用
  固定窗口大小
  不固定窗口随需要调整

6. 快排的多种方法

力扣题型&华为机试题型
  2，3，5，15，46

数学基础知识
  1. 质数/素数，与之相反的合数
  只有1和它本身两个约数的自然数，叫质数(Prime Number),也叫素数。
  如：由2÷1=2，2÷2=1，可知2的约数只有1和它本身2这两个约数，所以2就是质数。
  与之相对立的是合数：“除了1和它本身两个约数外，还有其它约数的数，叫合数。
  如：4÷1=4，4÷2=2，4÷4=1，很显然，4的约数除了1和它本身4这两个约数以外，还有约数2，所以4是合数。
  1既不是质数也不是合数。因为它的约数有且只有1这一个约数

  2. 对数(logN)，指数（2^n），N方（k^n)






