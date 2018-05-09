---
title: Node.js、npm的更新命令
date: 2018-05-08 17:02:50
categories:
    - Frontend
tags:
    - Node.js
    - npm
---

`Node.js`、`npm` 又又又又又更新了，一段时间不用更新命令又给忘了，记录下来吧。
<!-- more -->
&nbsp;

## 1、`Node.js`
登录API：[`wx.login`](https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html)
```vim
wx.login({
  success: res => {
    if (res.code) {
      // 登陆成功，拿到临时登录凭证code
      doLogin(res.code);
    }
  }
})
```
&nbsp;

## 2、`npm`
```vim
npm i -g npm
```
&nbsp;
