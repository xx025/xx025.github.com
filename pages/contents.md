---
title: 目录
layout: page
group: navigation
permalink: /contents/
---

### 随笔 
{{}}         
{%- for post in site.categories.essay -%}
{{ post.date | date: '%m-%d' }} &raquo; [{{ post.title }}]({{ post.url }})<br/>
{%- endfor -%}
---
### 读书笔记      
{{}}  
{%- for post in site.categories.rmk -%}
{{ post.date | date: '%m-%d' }} &raquo; [{{ post.title }}]({{ post.url }}) <br/>
{%- endfor -%}
---
### 网络程序设计    
{{}}
{%- for post in site.categories.sjwj -%}
{{ post.date | date: '%m-%d' }} &raquo; [{{ post.title }}]({{ post.url }}) <br/> 
{%- endfor -%}
---
### 数据挖掘
{{}}  
{%- for post in site.categories.sjwj -%}
{{ post.date | date: '%m-%d' }} &raquo; [{{ post.title }}]({{ post.url }})  <br/>
{%- endfor -%}
---
### 统计
<hr>
- 文章: <span class="post_num">{{ site.posts | size }}</span> 篇
  {% assign count = 0 %}
  {% for post in site.posts %}
    {% assign single_count = post.content | strip_html | strip_newlines | remove: " " | size %}
    {% assign count = count | plus: single_count %}
  {% endfor %}
- 字数: <span class="post_num">{{ count | divided_by: 1000.0 | round: 2 }}K</span> 字





