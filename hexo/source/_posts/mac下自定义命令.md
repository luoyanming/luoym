---
title: Mac下自定义命令
date: 2017-08-14 18:18:00
categories:
    - Frontend
tags:
    - Mac
    - Linux
---

`Mac` 下自定义一些常用命令，方便日常使用。
<!-- more -->

## 1、自定义方法
在 `vi ~/.bashrc` 里面写入： 
```vim
#显示所有文件，包括‘.’开头的隐藏文件
alias ll='ls -alF'

#使用sublime text 3打开文件：subl a.html
alias subl='/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl'

#nginx
alias no='cd /user/local/Cellar/nginx/1.12.1/bin'

#start nginx
alias ns='sudo ./nginx'

#reload nginx
alias nrs='sudo ./nginx -s reload'

#open nginx.config
alias nc='subl /usr/local/etc/nginx/nginx.conf'

#open HOSTS
alias hosto='subl /etc/hosts'
~                          
```
`:wq` 保存并退出。 再执行一遍 `source ~/.bashrc` 使自定义命令生效。
&nbsp;