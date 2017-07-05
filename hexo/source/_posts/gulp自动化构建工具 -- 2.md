---
title: gulp自动化构建工具 -- 2
date: 2017-03-22 17:32:18
categories:
    - Frontend
tags:
    - Gulp
---

上一章我们已经了解了 `gulp` 安装和配置，本章节将继续深入，讲解 `gulp` 一些常用插件 `gulp-clean-css`、`gulp-uglify`、`gulp-header`、`gulp-notify`、`gulp-plumber` 的运用。
<!-- more -->
## 1、基本作用介绍
1. `gulp-clean-css` ：压缩css文件，不推荐使用 `gulp-minify-css`
2. `gulp-uglify` ：压缩js文件，减小文件体积
3. `gulp-header` ：在文件头部添加注释信息
4. `gulp-notify` ：在控制台中添加文字描述
5. `gulp-plumber` ：执行 `gulp` 任务时显示报错信息，且不终止当前任务

## 2、安装 `plugin`
```
npm install gulp-clean-css gulp-uglify gulp-header gulp-notify gulp-plumber --save-dev
```

## 3、创建任务 `task`
``` javascript
var gulp = require('gulp'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    header = require('gulp-header'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber');

// 获取 package.json 内的信息
var pkg = require('./package.json'),
    notes = ['/**',
    ' * @author <%= pkg.author.name %>',
    ' * @email <%= pkg.author.email %>',
    ' * @descrip <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' */',
    ''].join('\n');

// 拷贝 html
gulp.task('copyhtml', function() {
  return gulp.src('dev/**/*.html')
        .pipe(gulp.dest('build'));
});

// 拷贝 min.js
gulp.task('copyjs', function() {
  return gulp.src('dev/**/*.min.js')
        .pipe(gulp.dest('build'))
});

// 拷贝 images
gulp.task('copyimages', function() {
  return gulp.src('dev/**/*.{png,jpg,gif,svg,ico}')
        .pipe(gulp.dest('build'));
});

// 压缩 css, 添加头部注释信息
gulp.task('cleancss', function() {
  return gulp.src('dev/**/*.css')
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(cleancss())
        .pipe(header(notes, { pkg : pkg } ))
        .pipe(gulp.dest('build'));
});

// 压缩 js, 添加头部注释信息
gulp.task('uglifyjs', function() {
  return gulp.src(['dev/**/*.js', '!dev/**/*.min.js'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(uglify({
          mangle: {except: ['require' ,'exports' ,'module' ,'$']}
        }))
        .pipe(header(notes, { pkg : pkg } ))
        .pipe(gulp.dest('build'));
});

gulp.task('default', ['copyhtml', 'copyjs', 'copyimages', 'cleancss', 'uglifyjs']);
```
`images` 此处只是简单的进行了拷贝，并没有用 `gulp-imagemin` 进行压缩（本人网络不好，下载不下来，很痛苦，大家有需求自己添加，用法跟 `gulp-uglify` 一致）。
顺便推荐大家一个压缩 `jpg` `png` 的网站，非常好用：[Tinypng.com](https://tinypng.com/)

## 4、运行
```
gulp
```

大功告成！

本章讲解了几个常用 `plugin`，操作一遍后应该对 `gulp` 有了更深的了解。"自动化构建工具" "构建" 两个字貌似实现了，但是"自动化"还没见到。每次修改文件要在浏览器上查看的时候都需要手动 `gulp` 运行任务，非常麻烦。怎么解决？请看下一章。

