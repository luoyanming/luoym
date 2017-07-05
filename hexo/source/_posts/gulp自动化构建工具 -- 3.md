---
title: gulp自动化构建工具 -- 3
date: 2017-03-23 11:12:00
categories:
    - Frontend
tags:
    - Gulp
---

上一章了解了 `gulp` 一些常用插件，本章将讲解让 `gulp` 自动化的方法。有两个插件必不可少：`gulp-livereload` `gulp-connect`。
<!-- more -->

## 1、基本作用介绍
1. `gulp-livereload`: 用来自动刷新页面的
2. `gulp-connect`: 创建一个本地服务器来运行我们的项目

## 2、安装
```
npm install gulp-livereload gulp-connect --save-dev
```

## 3、创建任务 `task`
``` javascript
// 引入插件
var livereload = require('gulp-livereload'),
    connect = require('gulp-connect');

gulp.task('copyhtml', function() {
  return gulp.src('dev/**/*.html')
        .pipe(gulp.dest('build'))
        .pipe(livereload());
});

// 监测 html 变化（新增、删除）
gulp.task('change', function() {
  gulp.src([
    'dev/**/*.html',
  ])
  .pipe(connect.reload());
});

// 监听任务，本示例包含任务 copyhtml、change
gulp.task('watch', function() {
  gulp.watch('dev/**/*.html', ['copyhtml']);
  gulp.watch([
    'dev/**/*.html',
  ], ['change']);
});

// 创建一个本地服务器
gulp.task('webserver', function() {
  connect.server({
    host: '',
    port: 9999,  //服务端口
    root: './',  //访问目录
    livereload: true
  });
});

gulp.task('server', ['copyhtml', 'webserver', 'watch']);
```

## 4、启动服务
```
gulp server
```
启动成功后，命令行工具上会打印：
``` cmd
...
[11:36:55] Server started http://localhost:9999
[11:36:55] LiveReload started on port 35729
...
```

现在，修改你的 `html` `css` `js` 等文件，你会发现浏览器页面会自动刷新，并呈现你最新的修改。`F5` 可以休息一下了。