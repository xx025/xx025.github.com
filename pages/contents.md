---
title: 目录
layout: page
group: navigation
permalink: /contents/
---



<!-- <div>
  {% for tag in site.tags %}
  {% capture tag_name %}{{ tag | first }}{% endcapture %}
    {% for post in site.tags[tag_name] %}
    {{post.url}}
    {% endfor %} 
  {% endfor %}
</div> -->


### 目录

{% for categ in site.contens %}

#### {{categ.title}} 

  {% capture my_variable %}  site.categories.posts.{{categ.path }} {% endcapture %}
    {%- for postt in my_variable -%}
      {{ postt }} 
    {% endfor %}
{% endfor %}

---

### [存档]({{relative_url}}/archive/)




