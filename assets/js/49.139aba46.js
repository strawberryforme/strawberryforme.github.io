(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{450:function(n,r,e){"use strict";e.r(r);var a=e(2),t=Object(a.a)({},(function(){var n=this,r=n._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[r("blockquote",[r("p",[n._v("可序列集合，数组。是最常用的数据结构。")])]),n._v(" "),r("p",[n._v("1、创建数组,数组下标，数组长度")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v("一、创建数组：\n1、const arr1 = new Array(element0e); const arr1 = Array(element0);\n    Array(11)会创建 长度11的empty 和 Array[11]会创建11元素。\n2、const arr1 = [element0]\n3、Array.of\n    Array.of(1);         // [1]\n    Array.of(undefined); // [undefined]\n    Array(1) !== [1] ===Array.of(1)\n\n二、稀疏数组\n    Array(100) 会创建 长度100的empty\n    Array(100).map(x => 1) //[empty × 100] 旧方法会跳过空槽，而新方法将它们视为 undefined。\n    生成 100 个元素为 1 的数组呢？\n    Array(100).fill(1);\n    Array.from(Array(100), (x) => 1) Array.from({ length: 100 }, (x) => 0);\n    数组的空位指，数组的某一个位置没有任何值\n    ES6 则是明确将空位转为undefined，\n    包括Array.from、扩展运算符、copyWithin()、fill()、entries()、keys()、values()、find()和findIndex()\n三、伪数组\n    类：对象+length属性。例如 arguments对象,NodeList,HTMLCollection,DOM对象。\n    在它们上调用数组方法，即使它们本身没有这些方法。\n    类数组转为数组：\n        1.Array.from(arrayLike); \n        2.var args = [...arguments];\n            [Symbol.iterator]: Array.prototype[Symbol.iterator]。需要添加iterator接口。\n        3.Array.prototype.slice.call(alo); 此方法如果不传参数的话会返回原数组的一个拷贝\n        Array.prototype.concat.apply([], arrayLike)\n        ①Array.prototype.slice，这段是执行slice，slice不传参数其实就是克隆数组。\n        ②让slice方法的this指向类数组（arrayLike或arguments）\n        实现：其实就是用call改变this指向，this变成谁，就会循环谁，把它里面每一项赋给新数组。\n        4.for (var i = 0; i < cArr.length; i++) {arr.push(cArr[i]);}\n    如何遍历类数组：\n        1、for循环 。2、slice，call,...将类数组转化为数组。+forEach循环。\n四、二维数组：\n    两个 for 循环。 fill + 一个 for 循环。\n    new Array(10).fill(0).map(() => new Array(y).fill(0))\n    Array.from(new Array(2), () => new Array(3).fill(0))\n五、数组的下标\n    1、索引必须：非负整数（或非负整数的字符串形式）。\n    2、引擎通过隐式的 toString，将 array[2] 中的 2 强制转换为字符串。\n    A['1'] === A[1] A['01']!== A[1]  \n\n六、数组长度\n    fruits[5] = 'mango'; firuits.length = 6\n    fruits.length = 100; firusits[8] = undefined，empty。长度之间没有赋值是empty\n    fruits.length = 2;减少以长度会删除\n\n七、扩展运算符的应用\n")])])]),r("p",[n._v("2、数组的API有哪些")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v("一、有哪些api：\n    属性：\n\n        Array.length：可以用来新增数组，删除数组\n    构造函数方法：\n        Array.from():将两类对象转为真正的数组： 类似数组的对象和可遍历（iterable）的对象。Set 和 Map\n        Array.of():创建一个新的 Array 实例，具有可变数量的参数，而不管参数的数量或类型。\n        Array.isArray():如果参数是数组则返回 true ，否则返回 false 。\n    原型方法：\n        1、push,pop,shift,unshift,reverse()，sort()，slice,splice,concat\n        2、indexof,lastIdenxof. forEach, map,filter, some,every,reduce,\n        3、find()、findIndex()  includes()  flat()，flatMap() \n        entries()，keys()，values() [Symbol.iterator]()  copyWithin() fill()\n        \n        1、sort a-b,b-a\n        2、slice,\n        3、splice\n        4、foreach，map，filter，for\n        5、reduce如何实现数组函数 reduce\n        6、flat，flatMap\n        7、\n二、哪些api需要实现：\n    sort:\n    实现一个数组扁平化的函数 flatten  实现一个数组扁平化的函数 flatten\n    如何实现一个 flatMap 函数 (头条)\n\n三、哪些api创建新数组： 7个\n    splice()（返回新数组） slice() concat()\n    flat() flatMap() map() filter()\n\n四、数组中有那些方法可以改变自身：9个\n    pop() push() shift() unshift() reverse() sort()\n    splice() fill() copyWithin()\n五、哪些api是es6有的：\n    Array.from()\n    Array.of()\n    copyWithin()\n    find()、findIndex()\n    fill()\n    entries()，keys()，values()\n    includes()\n    flat()，flatMap()\n")])])]),r("p",[n._v("3、实战：")]),n._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",[r("code",[n._v("如何判断一个数据类型是数组：\n    1.方法Array.isArray()\n    2.Object.prototype.toString.call(obj)。Object.prototype.toString.call(arr).indexOf('Array') !==-1\n    3.obj.__proto__.constructor.name \n    4.instanceof Array \n    toString 是 Object的原型方法，类似Array、Function等具体类型作为Object的实例，\n    已经重写了toString 方法。那么根据原型链知识：Array类型返回元素组成的字符串\n如何判断一个数组是否包含某个值\n    1、arr.indexOf(2); 有：返回下标。没有：-1.\n    2、arr.includes(2); 有：返回true。没有：返回false。\n    3、var result = arr.find(item =>{return item > 3});有：返回满足第一个条件的值。没有：返回undefined。\n    4、var result = arr.findIndex(item =>{ return item > 3});有：返回第一个元素下标。没有：返回-1\n\n如何把一个数组 Array 转化为迭代器 Iterable\n    const it = list[Symbol.iterator]();//list.values()\n    it.next() \n\n实现一个数组去重函数 unique\n\n\n\n如何过滤数组中的 falsy value \n    alsy value 包含：false, null, 0, \"\", undefined, NaN\n    function compact(array) {return array.filter(Boolean); }\n如何把一个数组随机打乱\n如何实现一个 sample 函数，从数组中随机取一个元素\n如何实现一个数组洗牌函数 shuffle\n实现一个函数 maxBy，根据给定条件找到最大的数组项\n实现一个函数 max，找到数组中最大的一个值/两个值/N个值\n如何实现 chunk 函数，数组进行分组\n实现 intersection，取数组交集\n如何实现一个 sampleSize 函数，从数组中随机取N个元素\n求给定数组中 N 个数相加之和为 sum 所有可能集合 求正序增长的正整数数组中，其和为 N 的两个数 \n数组内出现最多的元素的次数\n")])])])])}),[],!1,null,null,null);r.default=t.exports}}]);