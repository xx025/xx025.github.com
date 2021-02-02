---
title: Home
layout: home
description: 你才是那个穿越熊熊大火冲出这里的人《当你像鸟飞往你的山》
--- 
<section class="post">
{% for post in site.posts %}
 {% assign i = i | plus: 1 %}  
  {% if i < 2 %}
  <div class="post-list__meta">    <time datetime="{{post.date | date: date_to_xmlschema}}" class="post-list__date">{{ post.date | date:  "%F"}}</time>  </div>
     {{post.content }} 
     <hr class="post-list_divider" />
  {% else %}
      {% break %}
  {% endif %}
{%- endfor -%}
</section>

[更多]({{relative_url}}/syyd/)