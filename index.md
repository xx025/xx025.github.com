---
title: Home
layout: home
description:   我等了你四个夏天，你没有信守承诺，你再也没有回来。风筝死了，我将它埋葬在这里，谁知道呢，也许有一天你会找到它。
--- 
<section class="post">
{% for post in site.posts %}
 {% assign i = i | plus: 1 %}  
  {% if i < 2 %}
  <h4>{{post.title }} </h4>
  <div>
  
  <div class="post-list__meta">
  <time datetime="{{post.date | date: date_to_xmlschema}}" class="post-list__date">{{ post.date | date: "%F" }}</time> 

  </div>
     {{post.content }} 
     </div>
  {% else %}
      {% break %}
  {% endif %}
{%- endfor -%}
</section>

