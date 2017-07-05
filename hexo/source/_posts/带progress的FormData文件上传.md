---
title: 带progress的FormData文件上传
date: 2017-04-12 15:00:00
categories:
    - Frontend
tags:
    - Javascript
    - Form
    - Ajax
    - Upload
---

本章介绍利用 `$.ajax` 和 `FormData` 上传文件，并显示上传进度 `progress`。
<!-- more -->

## 1、`HTML` 结构
```html
// input file
<form id="form-file-upload">
  <input type="file" class="file-upload" name="file">
</form>

// progress
<div class="progress">
  <div class="progress-bar"></div>
</div>
```
这里有两点要注意：1. `input[type="file"]` 外层必须包裹 `form`; 2. 必须指定 `name="file"`;

## 2、`Code`
```javascript
var fileUpload = $('.file-upload'),
    progressBar = $('.progress-bar');
fileUpload.change(function() {
  var formData = new FormData($('#form-file-upload')[0]);
  
  $.ajax({
    url: '',
    type: 'POST',
    data: formData,
    dataType: 'JSON',
    async: true,
    cache: false,
    contentType: false,
    processData: false,
    xhr: function() {
      var xhr = $.ajaxSettings.xhr();
      xhr.upload.onloadstart = function(){
        console.log('Upload start.');
      };
      xhr.upload.onprogress = onprogress;  //上传progress调用方法
      return xhr;
    },  
    success: function (data) {
      console.log('succ')
    },
    error: function () {
      console.log('fail')
    }
  });
});

// 每隔一小段时间会调用这段方法
function onprogress(evt) {
  var loaded = evt.loaded,
      total = evt.total,
      per = Math.floor(100*loaded/total);
  progressBar.css('width' , per + '%');
}
```
测试的时候可以在 `Chrome` - `F12` - `Network` 选择 `Regular 3G`，效果比较明显。
&nbsp;