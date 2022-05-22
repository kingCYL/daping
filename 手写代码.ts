//面试题
//打印add空函数，因为返回的是对象时或者简单类型，就是这个对象/简单数据类型
//否则返回构造函数
var obj = {
    a: function () {
        return this.z;
    },
    b: 2
}

function add(v): void {
    return v + obj.a;
}
var ggg = new add(3);
console.log(ggg);

//数组去重
function uniq(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!arr1.includes(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}

//es 一句话去重 若没有Array.from() 则返回 Set(4) {4, 6, 7, 8}
let arr5 = Array.from(new Set([4, 6, 6, 7, 8]));
console.log(arr5);

let test = uniq([6, 6, 6, 7, 789, 0]);
console.log(test);

//合并多维数组
//1.数组元素非数字的时候不需要map，所以这个推荐都是数字元素的时候使用，
//意思是把字符串转换成数字
let a1 = [3, 4, [4, 4, 5, 6], 7, 9, 90, [1, 3]];
let arr2 = a1.toString().split(',').map(item => +item);
console.log(arr2);
//2.concat 每个元素都是数组的时候使用
//3.reduce函数 递归添加
let deep = (arr) => Array.isArray(arr) ? arr.reduce((a, b) => [...deep(a), deep(b)], []) : [arr];
arr2 = deep(a1);
//数组的深度拷贝 Array.from或者超引用
let arr6 = [1, 4, 3];
let arr7 = Array.from(arr6);
let arr8 = [...arr6];
arr7.push(9);
console.log(arr6);
console.log(arr7);
console.log(arr8);

//翻转
// arr2.reverse();
// arr2.sort((a,b)=>a<b);  大于号是不变

while (arr2.length) arr7.push(arr7.pop());
// var a=[7,8,9,6];
// var b =[]; 
// while(a.length){
//     b.push(a.pop());
//     console.log(b);
// }
// console.log(b); 

// str.split('').reverse().join('');

//倒着循环  
// 如果是数字 转换成字符串，然后切割成数组
let str1 = (""+123).split('');
let taget = [];
for (let i = str1.length-1; i >=0; i--) {
    taget.push(str1[i]);
}
taget.join('');

//判断一个数是整数
let num = 88;
if(typeof num === 'number' && num%1 ===0) //取余等于0
console.log(88%10);

//整数取整之后还是自己，所以用内置的各种四舍五入方法
if(Math.floor(num) === num)
if(Math.ceil(num) === num)
if(Math.round(num) === num)
var srt1:any;
parseInt(srt1,1) === num  //此处srt1强制解析成字符串，所以不是最佳选择
//四位运算
if((num | 0 ) === num)  //但是超过32位时返回false
//es6
if(Number.isInteger(num))

//输出什么
var x= 10;
var foo={
    x:20,
    bar:function(){
        var x=30;
        return this.x;
    }
}
console.log(foo.bar()); //20
console.log(foo.bar);//function foo.bar()
console.log((foo.bar)());//20
console.log(foo.bar = foo.bar);//function foo.bar()
console.log((foo.bar = foo.bar)());//10?
console.log(foo.bar,foo.bar());//function foo.bar()    20
console.log(foo.bar.call(window));//10
console.log(foo.bar.call(foo));//20









console.log([].constructor)  //Array() { [native code] }
//console.log([].property) //报错 undefined
console.log([].hasOwnProperty)
//hasOwnProperty() { [native code] }
typeof []
//"object" typeof 复杂引用类型时会返回原型   
//简单类型则直接返回  
//有计算的数值会隐式转换返回NAN
//字符串拼接（减号）则直接返回string+拼接数字

//instanceof  obj.instanceof construct    用来检测是否construct.property 是否存在obj的原型上
//返回布尔值
var arr = new Array();
// console.log(arr.instanceof Array); true
// console.log(arr.instanceof Obect); true

//注意：
//window instanceof Object  ===false  是JS中的对象，而不是任意对象
//typeof window   === object 

//display 可选的值
// none block inline inline-block list-item作为列表显示  
//run-in 根据上下文作为块级或者行内
//table  table相关
//inherit  从父元素继承display值
//flex布局时使用

//原生jS ajax 请求 兼容性
// var xhr = window.XMLHttpRequest?new XMLHttpRequest():new ActiveXobject('Microsoft.XMLHttp');
var xhr = new XMLHttpRequest();//创建XMLHttpRequest对象
let url;
xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
    //readyState  0=未初始化  1=服务器连接建立  2=请求接收 3=请求处理中 4=请求已完成，且响应就绪
    if (xhr.readyState == 4 && xhr.status == 200) {
        xhr.responseText  //拿到数据
    }
}
xhr.send();

xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'Appblication/x-www-from-urlencoded');
xhr.onreadystatechange = function () {
    //readyState  0=未初始化  1=服务器连接建立  2=请求接收 3=请求处理中 4=请求已完成，且响应就绪
    if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) {
        xhr.responseText  //拿到数据
    }
}
// xhr.send(data); post可以把参数这样传
xhr.send();

//jq ajax 请求 
$.ajax({
    type: 'GET',
    // type:'POST',
    url: url,
    dataType: 'json',
    data: { key: url },
    success: function (data) {
        //得到数据
    },
    error: function (jqxhr) {
        //失败处理
    }

});
//简单写法
$.get(url, { data: "" }, function () {
    // $.post(url,{data:""},function(){
    //成功拿到
}, 'json');

//load() 加载远程HTML并插入dom 比如图片加载  加载完成有complete（）
$('img').load(url, { data: '' }, function () {
    //成功拿到或者失败  这是个回调
});

//serialize() 将dom序列化为字符串
$('ul').serialize();


// 给你一个数组，问你是否存在一个数比它左边的都大，比它右边的都小。

function ishas(arr){
    // 第一项和最后一项不在范围内
    let number;
    for (let i = 1; i < arr.length-1; i++) {
       for (let j = i+1; j < arr.length; j++) {
           
       }
        
    }
}








