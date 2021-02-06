---
title: Home
layout: home
description: 你才是那个穿越熊熊大火冲出这里的人《当你像鸟飞往你的山》
--- 
<section class="post">
{% for post in site.posts %}
 {% assign i = i | plus: 1 %}  
  {% if i < 5 %}
  <div style ="box-shadow: 5px 5px 5px #ededed69; background-color: #f3f2f408; padding: 10px;margin-top: 10px;">
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

[更多]({{relative_url}}/syyd/)