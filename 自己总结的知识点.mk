# 原型和原型链
特性：每个对象都有__proto__ 属性，而protptype属性只有函数对象才有
所有的构造器都是函数对象，例如 new Date（），new Array（）等等new 操作符后的，都是构造器
原型对象即：person.prototype,这个对象里包含了所有可共享的属性和方法
原型对象里有个默认的属性:constructor 它是一个指针，指向person，
即 person.prototype.constructor === person

0.1 如何获取原型对象？通过__proto__属性
	person1.__proto__  ==== person.prototype
	person1.__proto__  ==== person1.construtor.prototype

0.2 如何获取构造器（构造函数）？通过construtor属性

var person1 = new person(); 
那么 person1.constructor === person;
	person.prototype.constructor === person;

1.为什么persion1有construtor?
	因为persion1是person的一个实例，person1的原型对象person.prototype对外共享了这个属性（指针）constructor

2.为什么person.prototype 有 constructor ？
	同理，因为person.prototype也是person的一个实例，
	即 person 在创建的时候，创建了一个实例赋值给person.prototype


2.清除浮动的方法
2.1 父级div定义伪类：after和zoom
.clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
.clearfloat{zoom:1}

2.2 在结尾处添加空div标签clear:both
2.3 父级div定义height
2.4 父级div定义overflow:hidden（必须设width或zoom）同时不能定义height,浏览器会自动检查浮动区域的高度
2.5 父级div定义overflow:auto 必须定义width或zoom:1，同时不能定义height，使用overflow:auto时，浏览器会自动检查浮动区域的高度
2.6.父级div也一起浮动,所有代码一起浮动，就变成了一个整体,产生新的浮动问题
2.7.父级div定义display:table，会产生新的未知问题
2.8、结尾处加br标签clear:both，父级div定义zoom:1来解决IE浮动问题，结尾处加br标签clear:both，不推荐使用





