---
title: Javascript学习001 -- script元素
date: 2017-07-11 15:43:00
categories:
    - Frontend
tags:
    - Javascript
    - script
---

做前端3年了，做过太多项目，技能都是在实际应用中不断踩坑填坑磨砺出来的。随着 `vue` 等框架运用的深入，越来越发现自己在 `Javascript` 基础上的薄弱，所以打算从头啃一遍 `《JavaScript 高级程序设计（第3版）》`，并且记录下这段学习过程。
首先是最基础的 `script` 元素。
<!-- more -->

## 1、`script` 元素的属性
```javascript
async    // 可选；立即下载脚本，但不妨碍页面中的其它操作。异步脚本不要在加载期间修改 DOM。
defer    // 可选；立即下载脚本，但延迟到文档完全被解析和现实之后执行。延迟脚本最好放在文档底部。
src      // 可选；引用外部文件；
type     // 可选；MIME类型（脚本语言的内容类型）。默认 text/javascript。
charset  // 可选；代码的字符集。大多数浏览器会忽略该属性。
```
无论是在 `script` 内嵌入代码，还是通过 `src` 引入外部文件，只要不存在 `async` `defer` 属性，浏览器都按照 `<script>` 在文档中出现的先后顺序对他们依次解析。`javascript` 会阻塞文档呈现。

## 2、嵌入代码和外部文件
这两种方式都可行，并没有硬性规定用哪种，但日常生产中我们推荐使用外部文件，为啥？
》可维护性好
》脚本共用的时候可缓存
》如果是内嵌代码，在 `XHTML` (可扩展超文本标记语言)中会报错，需要注释hack额外处理，但外部文件的语法是一致的。

## 3、`noscript` 元素
当浏览器不支持脚本或者脚本被禁用的时候，`noscript` 就该出场了：
```html
<noscript>
  <p>本页面需要浏览器支持（开启）JavaScript。</p>
</noscript>
```

&nbsp;