---
title: JSON和JSON格式字符串相互转化
date: 2017-06-30 10:56:00
categories:
    - Frontend
tags:
    - Javascript
    - JSON
---

在与服务端进行 `Ajax` 数据交互的时候，如果需要提交一个封装成JSON的数据，那么在提交之前，我们需要先将它转换成 `JSON格式字符串`。
<!-- more -->

## 1、`JSON` 转成 `JSON格式字符串`
```javascript
var json = [
      { 'name': 'luoym', 'age': '28' },
      { 'name': 'luoyanming', 'age': '18' }
    ];

console.log(JSON.stringify(json));  //"[{"name":"luoym","age":"28"},{"name":"luoyanming","age":"18"}]"
```

## 2、`JSON格式字符串` 转成 `JSON`
```javascript
var str = "[{"name":"luoym","age":"28"},{"name":"luoyanming","age":"18"}]";

console.log(JSON.parse(str));  //(2) [Object, Object]
```
&nbsp;