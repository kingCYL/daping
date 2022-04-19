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
5. 滑动窗口算法

力扣题型&华为机试题型
  2，3，5，15，46

数学基础知识
  1. 质数/素数，与之相反的合数
  只有1和它本身两个约数的自然数，叫质数(Prime Number),也叫素数。
  如：由2÷1=2，2÷2=1，可知2的约数只有1和它本身2这两个约数，所以2就是质数。
  与之相对立的是合数：“除了1和它本身两个约数外，还有其它约数的数，叫合数。
  如：4÷1=4，4÷2=2，4÷4=1，很显然，4的约数除了1和它本身4这两个约数以外，还有约数2，所以4是合数。
  1既不是质数也不是合数。因为它的约数有且只有1这一个约数

2. 



