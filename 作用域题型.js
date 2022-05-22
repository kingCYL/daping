// 打印什么？
var foo = test();
// 1. 函数预解析，所以执行到这一行时输出：1 undefined。 此时this指向window，而window中a虽然已声明（var变量提升）但是还未赋值
// 2. 因为闭包的原因，self，fa没有被释放，作用域仍是window
// 3. 此时return语句还没有执行



var a = 'win';

function test() {
    console.log('1', a);
    this.a = 'function';
    var self = this;
    var fa = self.a;
    return function() {
        console.log('2', this.a);
        console.log('3', self.a);
        console.log('4', fa);
    }
}

foo();
// 输出：
//1 win
// 2 win
//  3 win
// 4 function

// 原因：
// 1. 因为闭包的原因，self，fa没有被释放，this 指向window，而此时window中的a已经被赋值为“win”，所以第一个log,this.a 都是“win”
// 2. self.a，self中找不到，往上一级this中找到了a
// 3. 因为闭包的原因，fa没有被释放，所以是第一次执行时被赋值的function