---
title: 获取URL地址上的参数
date: 2017-04-01 11:28:00
categories:
    - Frontend
tags:
    - Javascript
    - URL
---

获取 `URL` 参数
<!-- more -->

```javascript
// func
function getQueryString(name){
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"),
      r = window.location.search.substr(1).match(reg);

  if (r != null) return unescape(r[2]); return null;
}

// 当前地址：http://www.luoym.com/news.html?id=1&category=2
getQueryString('id');  // 1
getQueryString('category');  // 2
```
&nbsp;