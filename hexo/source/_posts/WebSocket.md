---
title: WebSocket
date: 2017-08-11 14:34:00
categories:
    - Frontend
tags:
    - Javascript
    - Websocket
---

使用 `WebSocket` 跟服务端进行实时通讯。
<!-- more -->

## 1、`Coding` 
```javascript
//判断当前浏览器是否支持WebSocket
if ('WebSocket' in window) {
    ws = new WebSocket('ws://192.168.1.17');
} else {
    alert('当前浏览器不支持 webSocket, 请更换最新版谷歌浏览器！');
}

//连接发生错误的回调方法, 很多时候可以忽略
ws.onerror = function () {
    console.log("连接失败");
};

//连接成功建立的回调方法
ws.onopen = function () {
    console.log("WebSocket连接成功");

    // 链接成功后可以向服务端每隔3s发送心跳包，每发送一次，计数器+1
    // 服务端接收到消息后返回一条消息，浏览器接收到后计数器-1
    // 如果计数器值累计到3，表示3次请求无响应，与服务器链接已断开，重连
    // WebSocket发送消息必须是json字符串
    var heartData = {
        'code': 10001,
        'data': {

        }
    }
    ws.send(JSON.stringify(heartData));
}

//接收到消息的回调方法
ws.onmessage = function (event) {
    console.log(event.data);
}

//连接关闭的回调方法
ws.onclose = function () {
    console.log("WebSocket连接关闭");

    // 保险起见，手动再关闭ws
    ws.close();
}

//监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口。
window.onbeforeunload = function () {
    ws.close();
}
```
&nbsp;