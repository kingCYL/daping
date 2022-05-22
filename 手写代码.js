// 1. 深拷贝
function deepClone(obj) {
    if (obj instanceof RegExp) return new RegExp(obj);
    if (obj instanceof Date) return new Date(obj);
    //普通类型直接返回
    console.log("type", typeof obj);

    if (obj === null || typeof obj !== "object") return obj;

    let temp = new obj.constructor();
    console.log("temp", temp);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log("temp[key]", temp[key]);
            console.log("temp[key]", obj[key]);
            temp[key] = deepClone(obj[key]);
        }
    }
    return temp;
}

let arr1 = deepClone([3, 5, 7, 7, 88, 79, 0]);
// console.log('arr1', arr1);
let arr2 = deepClone([3, 5, 7, 7, [45, 67, 89], 88, 79, 0]);
// console.log('arr1', arr2);
let obj = {
    name: "king",
    agr: 12,
    say: () => {
        console.log("name", this.name);
    },
};
let obj2 = deepClone(obj);
obj2.say = () => {
    console.log("name", name);
};
// console.log('obj1', obj);
// console.log('obj2', obj2);

// 2 . 实现一个call  apply  bind
// 注意：三者是所有函数的原型Function上的方法,所以这里要用大写
// Function是一个构造函数，用于动态构建一个函数。
// function是关键字，通过function生成的函数实际上是一个Function对象的实例

//call步骤
/**
1.将当前对象设置为传入的函数的一个方法
2.将传入的参数组装后，给这个方法，然后执行
3.删除这个方法
4.返回执行结果
**/

Function.prototype.call2 = function(content = window) {
    //content = window    call2() 不传参数时，默认时window  注意：不传任何参数时，在严格模式下，this 的值将会是 undefined
    // console.log(content);
    // 同时要兼容传入 null /  undefined 的情况,一律默认成window
    content = content || window;
    content.fn = this;
    //接收所有参数组成数组，slice(1)从第二项开始截取到末尾，剔除第一个函数参数
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    // 有可能没有参数
    // let result = args.length ? content.fn(...args) : content.fn();
    delete content.fn;
    return result;
};
let foo = {
    value: 1,
};

function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}
bar.call2(foo, "black", "18"); // black 18 1

//apply步骤
/**
和call一样，只是在传参的方式不一样
**/

Function.prototype.apply2 = function(content = window) {
    //content = window    apply2() 不传参数时，默认时window  注意：不传任何参数时，在严格模式下，this 的值将会是 undefined
    // console.log(content);
    // 同时要兼容传入 null /  undefined 的情况,一律默认成window
    content = content || window;
    content.fn = this;
    let result;
    //判断有没有第二个参数
    if (arguments[1]) {
        result = content.fn(...arguments[1]);
    } else {
        result = content.fn();
    }
    delete content.fn;
    return result;
};
let foo = {
    value: 1,
};

function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}
foo.bind(bar);

function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}
bar.apply2(foo, ["black", "18"]); // black 18 1

// bind步骤  bind实现需要考虑实例化后对原型链的影响，即使用new调用的情况
Function.prototype.bind2 = function(content, ...args) {
    if (typeof this !== "function") {
        throw Error(this + "is not a function");
    }
    console.log([...args]);

    let fn = this;
    let resFn = function() {
        console.log([...arguments]);
        // 判断调用方式，为true则是new调用 this指向实例，否则为bind绑定的对象
        return fn.apply(this instanceof fn ? this : content, [
            ...args,
            ...arguments,
        ]);
    };
    // 创建中介函数，new出实例给返回函数resFn，使resFn多一层prototype。
    // 当使用new调用 bind2方法的时候，new出的实例使用prototype改变属性，也不会影响到原始的构造函数fn(即this)
    function temp() {}
    // 考虑到使用new的情况，即使copy了原函数，也要将它的原型保存下来
    temp.prototype = this.prototype;
    resFn.prototype = new temp();
    return resFn;
};

// 验证例子1
function Point(x, y) {
    this.x = x;
    this.y = y;
    this.toString = function() {
        return `${this.x},${this.y}`;
    };
}

// 写外面也可以
// Point.prototype.toString = function() {
//     return `${this.x},${this.y}`;
// };

let a = Point.bind2({}, 8);
let b = new a(6);
console.log("666", b.toString());

// 验证例子2
let m = {
    x: 42,
    getX: function() {
        return this.x;
    },
};

let boundGetX = m.getX.bind2(m);
console.log("3333", boundGetX());

// 3. 实现一个new操作
/**
 * new内部原理：
 * 创建一个新对象
 * 将这个新对象的引用赋给this，并让这个对象继承函数的原型（链）
 * 通过this（执行传入的函数），将函数的属性和方法给这个对象
 * 返回这个对象
 */





/**
 * 
 * 1.基于传入的func的prototype 创建一个空对象
 * 2.将this指向这个新建的对象
 * 3.如果func有返回，则返回之
 * 4.func无返回，则返回这个对象
 */
function new3(func) {
    let res;
    if (func.prototype === null) {
        res = {};
        res.__proto__ = func.prototype;
    } else {
        res = Object.create(func.prototype);
    }

    let args = [...arguments].slice(1);
    let result = func.apply(res, args);
    if (result !== null && (typeof result === 'object' || typeof result === 'function')) return result;
    return res;

}

function new2(func) {
    let res;
    // 判断
    if (func.prototype !== null) {
        // 但是这种赋值操作1.不应该简单粗暴改变对象的__proto__ 2.浏览器/js引擎执行会非常慢
        res = Object.create(func.prototype);
    } else {
        res = {};
        res.__proto__ = func.prototype;
    }
    let args = [...arguments].slice(1);
    // 或者
    // let args = Array.prototype.slice.call(arguments,1);
    // 用apply指定新对象res为this上下文
    let result = func.apply(res, args);
    //  如果构造器没有手动返回对象，则返回第一步创建的新对象，如果有，则舍弃掉第一步创建的新对象，返回手动return的对象。
    if (
        result !== null &&
        (typeof result === "object" || typeof result === "function")
    )
        return result;
    return res;
}

// 验证例子
let Parent = function(name, age) {
    this.name = name;
    this.age = age;
};
Parent.prototype.sayName = function() {
    console.log(this.name);
};

let p = new2(Parent, "yyu", "44");
console.log(p.sayName());

// 4. 实现一个JSON.stringify
/**
 * JSON.stringify 特征：
 * 如果一个被序列化的对象拥有 toJSON 方法，那么该 toJSON 方法就会覆盖该对象默认的序列化行为：不是该对象被序列化，而是调用 toJSON 方法后的返回值会被序列化
 * Boolean | Number| String 类型会自动转换成对应的原始值。
 * undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）
 * 函数、undefined 被单独转换时，会返回 undefined，如JSON.stringify(function()
 * 非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
 * 所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
 * Date 日期调用了 toJSON() 将其转换为了 string 字符串（同Date.toISOString()），因此会被当做字符串处理。
 * NaN 和 Infinity 格式的数值及 null 都会被当做 null。
 * 其他类型的对象，包括 Map/Set/WeakMap/WeakSet，仅会序列化可枚举的属性。
 * 不可枚举的属性会被忽略
 * 如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。
 */

function jsonStringify(obj) {
    let type = typeof obj;
    if (type !== "object") {
        if (/string | function | undefined/.test(type)) {
            obj = '"' + obj + '"';
        }
        return String(obj);
    } else {
        let json = [],
            isArr = Array.isArray(obj);
        for (let k in obj) {
            let v = obj[k];
            let type = typeof v;
            if (/string | function | undefined/.test(type)) {
                v = '"' + v + '"';
            } else if (type === "object") {
                v = jsonStringify(v);
            }
            json.push((isArr ? "" : '"' + k + '":') + String(v));
        }
        return (isArr ? "[" : "{") + String(json) + (isArr ? "]" : "}");
    }
}
console.log(
    jsonStringify({
        x: 5,
    })
);
console.log(jsonStringify([1, "false", false]));
console.log(
    jsonStringify({
        b: undefined,
    })
);

// 5.  实现一个JSON.parse
// 方法一：接调用 eval
/**
 *
 * 避免在不必要的情况下使用 eval，eval() 是一个危险的函数， 他执行的代码拥有着执行者的权利。
 * 如果你用 eval()运行的字符串代码被恶意方（不怀好意的人）操控修改，您最终可能会在您的网页/扩展程序的权限下，在用户计算机上运行恶意代码。
 * 它会执行JS代码，有XSS漏洞。
 * 解决办法：对opt进行正则校验
 */
function jsonParse(opt) {
    return eval("(" + opt + ")");
}
// 校验：
var rx_one = /^[\],:{}\s]*$/;
var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
if (
    rx_one.test(
        json.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")
    )
) {
    var obj = eval("(" + json + ")");
}

// 方法二：new Function
/**
 * Function与eval有相同的字符串参数特性。
 * eval 与 Function 都有着动态编译js代码的作用，但是在实际的编程中并不推荐使用
 */

function jsonParse(opt) {
    let obj = new Function("return" + opt)();
    return obj;
}

var jsonStr = '{ "age": 20, "name": "jack" }';
console.log(jsonParse(jsonStr));

// 全面而又正规的三种方法：https://github.com/youngwind/blog/issues/115
// 涉及到繁琐的递归和状态机相关原理

Function.prototype.call3 = function(ctx = window) {
    console.log(this);
    //this 是调用者bar函数 function bar(name, age) {
    //   console.log(name);
    //   console.log(age);
    //   console.log(this.value);
    // }
    console.log(ctx);
    // ctx借来的属性/方法： {value: 1,}
    console.log(arguments);
    // args参数是传给bar的实参 "black", "18"

    ctx = ctx || window;

    // 如果写成 let fn = this;那么就会丢失借来的属性/方法  {value: 1,}
    ctx.fn = this;

    let args = [...arguments].slice(1);
    console.log(this);
    console.log(ctx);
    console.log(args);

    let result = ctx.fn(...args);
    // 到这一步，result对象包含了借来的{value: 1,}，bar也拿到了自己的实参并执行
    delete ctx.fn; //得到想要的，删除变量
    return result; //将借来的{value: 1,}返回给bar
};
let foo = {
    value: 1,
};

function bar(name, age) {
    console.log(name);
    console.log(age);
    console.log(this.value);
}
bar.call3(foo, "black", "18"); // black 18 1

Function.prototype.apply3 = function(ctx = window) {
    ctx = ctx || window;
    ctx.fn = this;
    let result;
    if (arguments[1]) {
        result = ctx.fn(...arguments[1]);
    } else {
        result = ctx.fn();
    }
    delete ctx.fn;
    return result;
};

Function.prototype.bind3 = function(ctx, ...args) {
    if (typeof this !== "function") {
        throw Error(this + "is not a function");
    }

    let fn = this;
    let resFn = function() {
        return fn.apply(this instanceof fn ? this : ctx, [...args, ...arguments]);
    };
    let temp = function() {};
    temp.prototype = this.prototype;
    resFn.prototype = new temp();
    return resFn;
};

// 输出函数 b
var b = 10;
(function b() {
    b = 20;
    console.log(b);
})();

// 变量与函数名相同时
// 1)函数声明会置顶(置顶成函数表达式)
// 2)变量声明也会置顶  (函数表达式看成变量形式),(变量与函数置声明顶都是在当前作用域下)
// 3)函数声明比变量声明更置顶：(函数在变量上面)  变量赋值>函数声明>变量声明

// 4)变量和赋值语句一起书写，在js引擎解析时，会将其拆成声明和赋值2部分，声明置顶，赋值保留在原来位置
// 5)声明过的变量不会重复声明（同一作用域下）

// 函数声明的几种方式：

function func1(a) {} //函数声明

var func2 = function(b) {}; //函数表达式（匿名）

var func3 = function func4(c) {}; //命名式函数表达式

var func5 = (function(n1, n2) {})(); //立即执行的函数表达式

return function() {}; //作为返回值的函数表达式

var func6 = new Function(); //构造函数声明

// 
// new Promise(() => {
//     new Promise(() => {
//         console.log(1);
//     }).then(() => {
//         console.log(2);
//     })
// }).then(() => {
//     console.log(3);
// })

// new Promise(() => {
//     console.log(4);
// }).then(() => {
//     console.log(5);
// })

console.log(1);
setTimeout(() => {
    console.log(2);
    process.nextTick(() => {
        console.log(3);
    })
    new Promise(res => {
        console.log(4);
        res();
    }).then(() => {
        console.log(5);
    })
}, 0);
process.nextTick(() => {
    console.log(6);
})
new Promise(res => {
    console.log(7);
    res();
}).then(() => {
    console.log(8);
})

setTimeout(() => {
    console.log(9);
    process.nextTick(() => {
        console.log(10);
    })
    new Promise(res => {
        console.log(11);
        res();
    }).then(() => {
        console.log(12);
    })
}, 0);

//this 指向与class
class C {
    showThis() {
        console.log(this);
    }
}

var b = function() {

    a = function name(params) {
            console.log('===', this);
        }
        // d.call(a);
}
var d = new C().call(b);;

// var o = new b();
// var showThis = o.showThis;
// showThis(); // undefined
// o.showThis(); // o


let test = new Map();

function fn() {
    console.log(9999);
}
test.set(fn, fn)
console.log(test.keys().next().value()); //9999