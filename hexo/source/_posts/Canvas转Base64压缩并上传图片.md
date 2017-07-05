---
title: Canvas转Base64压缩并上传图片
date: 2017-05-06 14:00:00
categories:
    - Frontend
tags:
    - Javascript
    - Canvas
    - Base64
    - Upload
---

本章介绍利用 `canvas` 转成 `base64` 上传并压缩图片。
<!-- more -->

## 1、`HTML` 结构
```html
<input type="file" class="image-upload">
```

## 2、`Code`
```javascript
var imageUpload = $('.image-upload');

imageUpload.change(function () {
  var _this = $(this),
      files = this.files[0],
      reader = new FileReader();

  if (!/image\/\w+/.test(files.type)) {
    console.log("请确保文件类型为图像类型");
    return false;
  }

  reader.readAsDataURL(files);
  reader.onload = function (e) {
    var imgBase64Data = this.result,
        imgLen = imgBase64Data.length;

    //如果大于512K,进行压缩
    if (imgLen > 512000) {
      var scale = 512000 / imgLen * 1.5,
          img = new Image();
          img.src = imgBase64Data;

      img.onload = function () {
        var nW = img.width,
            nH = img.height,
            w = nW * scale,
            h = nH * scale;

        var canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');
            
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, 0, 0, w, h);
        imgBase64Data = canvas.toDataURL('image/jpeg');
        submitImageData(imgBase64Data);
    }

    submitImageData(imgBase64Data);
  }
});

// 把 imgBase64Data 传给服务端
function submitImageData(data) {
  //...
}
```
图片长宽具体缩小多少倍（demo是1.5倍），可以根据实际情况做调整。
&nbsp;