---
title: 滚动条Scrollbar样式自定义
date: 2017-05-28 9:40:00
categories:
    - Frontend
tags:
    - CSS
    - Scrollbar
---

本章介绍如何自定义页面滚动条 `scrollbar`。
<!-- more -->

## 1、`Code`
```css
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: rgba(0,0,0,0.12);
}
::-webkit-scrollbar-track {
  border-radius: 0;
  background-color: transparent;
}
::-webkit-scrollbar-track:hover {
  border-radius: 4px;
  background: rgba(0,0,0,0.12);
}
```
适用于浅色背景。
&nbsp;