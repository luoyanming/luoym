---
title: gulp自动化构建工具 -- 1
date: 2017-03-22 15:32:18
categories:
    - Frontend
tags:
    - Gulp
---

刚搭建好 `Github Pages`，第一篇博客就从 `gulp` 开始吧！

`gulp` 是前端开发过程中对代码进行构建的工具，基于 `Nodejs`，能快速方便的对 `html`、`javascript`、`css`、`sass`、`less`、`image` 等进行检查、压缩、格式化、混淆、拷贝、合并等操作。
<!-- more -->
`gulp` 和 `grunt` 非常类似，个人感觉 `gulp` 使用起来比 `grunt` 要简单粗暴，代码书写也更简洁易懂。废话不多说，下面开始正戏：

## 1、安装 `Nodejs`
戳这里：[Nodejs 的安装与配置](#)

## 2、全局安装 `gulp`
```
npm install gulp -g
```
执行 `gulp -v` 查看版本号，`version 3.9.1` 显示版本号即为安装成功。

## 3、新建 `package.json`
``` json
{
  "name": "luoym",
  "version": "1.0.0",
  "description": "",
  "homepage": "",
  "author": {
    "name": "luoym",
    "email": "13575458746@163.com"
  },
  "license": "ISC",
  "devDependencies": {
    "gulp": "^3.9.1",
    "gulp-clean-css": "^2.0.13",
    "gulp-connect": "^5.0.0",
    "gulp-header": "^1.8.8",
    "gulp-livereload": "^3.8.1",
    "gulp-notify": "^2.2.0",
    "gulp-plumber": "^1.1.0",
    "gulp-sass": "^2.3.2",
    "gulp-uglify": "^2.0.0"
  }
}
```
这是已有项目的 `package.json`，如果你也有配置好的 `package.json`，命令行的输入：
```
npm install
```
系统就会自动安装 `devDependencies` 里面所列的插件。

当然，我们要讲的是从头开始，新建好 `package.json` 后，`devDependencies` 里面是空的。首先，我们要先在项目本地安装 `gulp`，是的，没搞错， `gulp` 全局要安装，本地也要安装。进入 `package.json` 所在目录，命令行的输入：
```
npm install gulp --save-dev
```
`-g` 是全局安装 `--save-dev` 是本地安装。

如果安装完成，命令行工具显示如下信息：

![gulp-1.png](/assets/images/gulp-1.png)

你会发现目录下面多了一个 `node_modules` 文件夹，里面存放的就是本地安装的插件

## 4、新建 `gulpfile.js`
``` javascript
//引入插件
var gulp = require('gulp');

//创建 gulp 任务
gulp.task('copy', function() {
  return gulp.src('dev/webapp/**/*.html')
         .pipe(gulp.dest('build/webapp'));
});
```
`copy` 任务的作用是将 `dev/webapp/` 内的所有 `html` 文件拷贝到 `build/webapp` 内。再输入：
``` javascript
gulp.task('default', ['copy']);
```
进行到这一步，项目结构应该是这样的：

![gulp-2.png](/assets/images/gulp-2.png)
接下去，再命令行工具中我们可以来执行 `gulp` 任务，输入 `gulp` 或者 `gulp default`：

![gulp-3.png](/assets/images/gulp-3.png)
![gulp-4.png](/assets/images/gulp-4.png)
至此，一个最简单的 `gulp` 工具就搭建好了。是不是很简单？

下一章将继续深入探讨 `gulp` 的一些插件 `plugin`。




