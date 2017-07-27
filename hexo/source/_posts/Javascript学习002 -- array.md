---
title: Javascript学习002 -- array
date: 2017-07-26 10:49
categories:
    - Frontend
tags:
    - Javascript
    - Array
---

`Array` 数组的一些常用方法。
<!-- more -->

## 1、创建 `Array`
```javascript
// 创建空数组
var arr = new Array();
var arr = [];

// 创建长度为2的数组
var arr = new Array(2);
var arr = new Array('luoym', 'luoyanming');
var arr = ['luoym', 'luoyanming'];
arr.length = 4;
```

## 2、获取 `Array` 的值或属性
```javascript
var arr = ['luoym', 'luoyanming'];

// 取值 
arr[0]; // luoym
arr[1]; // luoyanming
arr[2]; // undefined

// 获取长度
arr.length; // 2
```

## 3、检测是否是 `Array`
```javascript
var a = new Object(),
    b = new Array();

console.log(a instanceof Array); // false
console.log(b instanceof Array); // true
console.log(Array.isArray(a)); // false
console.log(Array.isArray(b)); // true

```

## 4、`Array` 和 `String` 之间相互转化
```javascript
// 数组转字符串
var arr = ['a', 'b', 'c'];

console.log(arr.join('-')); // 'a-b-c'
console.log(arr.join(',')); // 'a,b,c'

// 字符串转数组
var str1 = 'a,b,c',
    str2 = 'a-b-c';

console.log(str1.split(',')); // ['a', 'b', 'c']
console.log(str2.split('-')); // ['a', 'b', 'c']
```

## 5、常用方法
```javascript
// 栈方法（后进先出 Last-In-First-Out）
var arr = ['a', 'b'];

arr.push('c'); // ['a', 'b', 'c'] 推入一项到数组末尾
arr.length; // 3
arr.pop(); // 'c' 获取数组最后一项
arr.length; // 2


// 队列方法（先进先出 First-In-First-Out）
var arr = ['a', 'b'];

arr.push('c'); // ['a', 'b', 'c'] 推入一项到数组末尾
arr.length; // 3
arr.shift(); // 'a' 获取数组第一项
arr.length; // 2
arr.unshift('d'); // ['d','b', 'c'] 在数组前端添加一项
arr.lengtgh; // 3


// 重排序方法（将数组的值转成string进行比较）
var arr = [3, 2, 1, 4, 5];
arr.reverse(); // [5, 4, 1, 2, 3]; 反转顺序

var arr = [0, 1, 5, 10, 15];
arr.sort(); // [0, 1, 10, 15, 5]; 升序排列


// 操作方法
var arr1 = [1, 2, 3, 4, 5],
    arr2 = [3, 4];

arr1.concat(arr2); // [1, 2, 3, 4, 5, 3, 4] 合并2个数组，简单添加到末尾生成新数组, arr1的值保持不变
arr1.slice(1); // [2, 3, 4, 5] 截取数组，从下标为1的点开始，原数组arr1值保持不变
arr1.slice(1, 4); // [2, 3, 4] 第一个参数表示起始位置（包含起始位置），第二个参数表示结束位置（不包括结束位置）
arr1.slice(-3, -2); // [3] 若参数是负数，则将参数和数组长度5相加，等价于arr1.slice(2, 3); 
arr1.splice(1, 2); // [2, 3] 从起始位置1开始删除2项，返回删除元素的集合，arr1的值变成[1,4,5]
console.log(arr1); // [1, 4, 5]
arr1.splice(1, 1, 3, 3, 3); // [4] 从起始位置1开始删除1项，返回删除元素的集合，并在删除位置添加3个元素，arr1的值变成[1,3,3,3,5]   
console.log(arr1); // [1, 3, 3, 3, 5]


// 位置方法
var arr = [1, 2, 3, 4, 5, 6];
arr.indexOf(2); // 1 从开头位置查找值2是否存在，若存在，返回该值的索引 1
arr.indexOf(7); // -1 若不存在，则返回 -1
arr.lastIndexOf(2); // 1 从末尾位置开始查找
arr.indexOf(5, 3); // 4 从数组索引为 3 的位置开始产找值 5 是否存在


// 迭代方法
var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var everyResult = arr.every(function(item, index, array) {
    return (item < 2); // 判断是否满足函数条件 < 2，若满足，继续循环，若不满足，跳出循环。所有元素都满足时，返回true，否则返回false。
});
console.log(everyResult); // false

var someResult = arr.some(function(item, index, array) {
    return (item < 2); // 判断是否满足函数条件 < 2，若满足，跳出循环，若不满足，继续循环。只要有一个元素满足时，就返回true，所有都不满足则返回false。
});
console.log(someResult); // true

var filterResult = arr.filter(function(item, index, array) {
    return (item < 2); // 在返回的数组中包含满足判断条件的项
});
console.log(filterResult); // [1, 1]

var mapResult = arr.map(function(item, index, array) {
    return item * 2; // 在返回的数组中包含函数运行后的项
});
console.log(mapResult); // [2, 4, 6, 8, 10, 8, 6, 4, 2]

arr.forEach(function(item, index, array) {
    // 执行某些操作，类似for循环
});


// 归并方法
var arr = [1, 2, 3, 4, 5];
var sum = arr.reduce(function(prev, cur, index, array) {
    return prev + cur;
});
console.log(sum); // 15
// reduce 从头开始遍历数组
// reduceRight 从末尾开始遍历数组
```
&nbsp;

