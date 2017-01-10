---
layout: page
title: Studies
permalink: /studies
---

{% for post in site.posts %}
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
{% endfor %}
