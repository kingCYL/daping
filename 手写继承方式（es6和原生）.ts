//ES6 中类的继承实现(标准)
class cat {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  say() {
    console.log("meow");
  }
}

class bosi extends cat {
  type: string;
  constructor(type: string, name: string) {
    super(name);
    this.type = type;
  }

  say() {
    console.log("bosi meow");
  }
}

let newbosi = new bosi("newbosi", "mao");
//子类中如果有同名的方法，那么就会发生覆盖，子类覆盖父类
newbosi.say(); //bosi meow

//一、原生JS中的继承实现(5种 都是构造函数继承)
//1.构造函数绑定（call aplly）将父对象的构造函数绑定在子对象的构造函数上
function Animal(a) {
  this.type = "动物";
  this.a = a;
}
//让猫继承动物
function Cat(name, color) {
  this.name = name;
  this.color = color;
  let b = ()=>{
    this.name = name + '99'
  }
  Animal.apply(b, arguments);
}
let cat1 = new Cat("mme", "red");
console.log(cat1.name); //动物
console.log(cat1.type); //动物

//2。prototype模式
//如果cat的prototype指向动物的实例，那么cat也就能继承动物了
Cat.prototype = new Animal("");
//这个时候cat自己的构造函数也变成了动物的，这就丢失了cat自己的本地属性，所以----
Cat.prototype.constructor = Cat; //前后两句必须搭配使用
let cat2 = new Cat("mme", "red");
console.log(cat2.type); //动物

//3.直接继承prototype
//这是对第二种方法的改进，所谓继承，就是继承非本地的属性，而非本地的属性都是放在prototype上的，
//所以可以跳过Animal（）直接继承Animal.Prototype
//这就需要改写一下Animal对象
function Animal2() {
  Animal2.prototype.type = "动物";
}
Cat.prototype = Animal2.prototype;
Cat.prototype.constructor = Cat;
let cat3 = new Cat("mme", "red");
console.log(cat3.type); //动物
//改进的优点：执行效率高（不用执行和Animal2的实例建立联系了）比较省内存
//改进的缺点：Cat.prototype 和 Animal2.prototype指向了同一个对象，
//任何对Cat.prototype的修改都会反应到Animal2.prototype上，所以
//此处Cat.prototype.constructor = Cat;这行代码已经把Animal2.constructor也改成了Cat的！

//4.利用空对象作为中介
//改正第三种方法的缺点
function extend(child, parent) {
  // let fn1 = {};
  let fn = function () {};
  fn.prototype = parent.prototype;
  child.prototype = new fn();
  child.prototype.constructor = child; //与上一句搭配使用
  //预备一个父类的prototype给子类用

  child.uber = parent.prototype;
}

extend(Cat, Animal);
let cat4 = new Cat("mme", "red");
console.log(cat4.type); //动物

//5.拷贝继承
//将父类的所有方法和属性拷贝给子类
//首先还是要改写Animal，因为还是要用到prototype
function Animal3() {
  Animal3.prototype.type = "动物";
}
function extend2(child, parent) {
  let p = parent.prototype;
  let c = child.prototype;
  for (let i in p) {
    c[i] = p[i];
  }

  c.uber = p;
}

extend2(Cat, Animal);
let cat5 = new Cat("mme", "red");
console.log(cat5.type); //动物

//二、非构造函数继承（普通对象，不是构造函数的情况下）
//1.object方法
//该方法只做一件事：把子对象的prototype指向父对象，使子对象和父对象连在一起
function object(obj) {
  function F() {}
  F.prototype = obj;
  return new F();
}
// 使用
function chinese() {
  nation: "中国人";
}

function doctor() {
  career: "医生";
}

let doctor1 = object(chinese);
doctor1.nation; //中国人

//2.浅拷贝 被继承对象会被改变
function extendCope(p) {
  let c = {};
  for (let i in p) {
    c[i] = p[i];
  }
  c["uber"] = p;
  return c;
}

let doctor2 = extendCope(chinese);
// doctor2.nation // 中国人

//3.深拷贝 被继承对象不会被篡改
//递归调用浅拷贝
function deepCopy(p, c?) {
  // let C = c || {}; //C参数没有的情况下
  // let 不允许同名，所以只能大写C
  // var c = c || {}; //C参数没有的情况下
  let C = c ? c : {};
  for (let i in p) {
    if (typeof p[i] === "object") {
      C[i] = p[i].constructor === Array ? [] : {};
      deepCopy(p[i], C[i]);
    } else {
      c[i] = p[i];
    }
  }

  return C;
}
let doctor3 = deepCopy(chinese);
doctor3.nation; // 中国人

//接口继承接口
interface onePoint {
  x: number;
  y: number;
}
interface fourPoint {
  type: string;
}

interface twoPoint extends onePoint {
  z: number;
}

//单个接口继承
let newtwopoint: twoPoint = {
  z: 100,
  x: 10,
  y: 15,
};

interface threePoint extends twoPoint, fourPoint {
  time: Date;
}

//多个接口继承
let duogejic: threePoint = {
  time: new Date(),
  z: 100,
  x: 10,
  y: 15,
  type: "ff",
};

//接口继承类
class bird {
  name: string;
  fly(): void {}
}

interface fly extends bird {}

let newfly: fly = {
  name: "huamei",
  fly(): void {},
};

// 实现一个Promise
function Promise(fn) {
  this.cbs = [];

  const resolve = (value) => {
    setTimeout(() => {
      this.data = value;
      this.cbs.forEach((cb) => cb(value));
    });
  };

  fn(resolve.bind(this));
}

Promise.prototype.then = function (onResolved) {
  return new Promise((resolve) => {
    this.cbs.push(() => {
      const res = onResolved(this.data);
      if (res instanceof Promise) {
        res.then(resolve);
      } else {
        resolve(res);
      }
    });
  });
};

class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._resolveQueue = []; // then收集的执行成功的回调队列
    this._rejectQueue = []; // then收集的执行失败的回调队列

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      // 从成功队列里取出回调依次执行
      while (this._resolveQueue.length) {
        const callback = this._resolveQueue.shift();
        callback(val);
      }
    };
    // 实现同resolve
    let _reject = (val) => {
      while (this._rejectQueue.length) {
        const callback = this._rejectQueue.shift();
        callback(val);
      }
    };
    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject);
  }

  // then方法,接收一个成功的回调和一个失败的回调，并push进对应队列
  then(resolveFn, rejectFn) {
    this._resolveQueue.push(resolveFn);
    this._rejectQueue.push(rejectFn);
  }
}

// 防抖动函数
function debounce(fn, wait = 50, immediate) {
  let timer;
  return function () {
    if (immediate) {
      fn.apply(this, arguments);
    }
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, wait);
  };
}

// 节流
function throttle(fn, wait) {
	let prev = new Date();
	return function() { 
	    const args = arguments;
		const now = new Date();
		if (now - prev > wait) {
			fn.apply(this, args);
			prev = new Date();
		}
	}

