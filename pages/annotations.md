---
layout: page
title: Annotations
permalink: /annotations
listed: false
excerpt: "Michael's annotations on various texts, books and articles"
---

These are various reading/study notes that I make for future reference.  

{% for post in site.categories.annotation %}
	{% assign title_len = post.title | size %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{% if title_len > 0 %}{{ post.title }}{% else %}{{ "untitled" }}{% endif %}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
