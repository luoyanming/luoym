---
title: 模拟Ajax Post提交
date: 2017-04-02 14:10:00
categories:
    - Frontend
tags:
    - Javascript
    - Ajax
---

模拟Ajax Post提交
<!-- more -->

```javascript
// func
function ajaxPost(URL, PARAMS) {
  var temp = document.createElement("form");
  temp.action = URL;
  temp.method = "post";
  temp.style.display = "none";
  for (var x in PARAMS) {
    var opt = document.createElement("textarea");
    opt.name = x;
    opt.value = PARAMS[x];
    temp.appendChild(opt);
  }
  document.body.appendChild(temp);
  temp.submit();
  return temp;
}

ajaxPost('http://www.luoym.com/getMemberInfo.html', {
  mibile: '13575458746',
  code: '8547'
});
```
&nbsp;