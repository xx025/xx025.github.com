---
layout: page
title: "关于"
permalink: /about/
---  
Welcome to GitHub!

<!--  bundle exec jekyll serve -->

---

我对最初生成的模板进行了一些简单的改动，部分改动标记如下


1. 简单调整底部布局
    ```
    @include media-query($on-laptop)
    {
        ...
    }
    @include media-query($on-palm)
    {
        ...
    }
    ...
    ```
3. 简单调整网站配色，其中配色借鉴了一些主流网站，虽然还是不好看
    ```    
    $header-background-color:#0e3754;
    $site-title-color:#fdfdfd;
    $site-nav-page-link-color:#fdfdfd;
    ...
    ```
4. 移除了一些社交连接，添加了微博图标
    ```
    <symbol id="weibo" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-...

    <a href="https://www.weibo.com/ site.weibo_username_id| ...                

    ```
5. 创建新的页面并对标题做调整
    ```
        if  post.title contains '读书笔记' 
               post.title| remove: "读书笔记" | escape
        ...
    ```
6. 为站点添加图标
    这个就将名为favicon.ico文件放在根目录下就行
7. 调整为文章列表显示样式，配置显示文章摘要
8. 调整文章链接采用xx.xx/xxx.html样式

9. 调整文章目录结构

10. 将配色调成白、黑和灰

11. 首篇文章显示全文

9. 本站源码见页脚(章鱼猫)github个人主页 [github.com/xx025](https://github.com/xx025)库
