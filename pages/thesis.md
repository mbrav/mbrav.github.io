---
layout: page
title: Thesis
permalink: /thesis
listed: false
excerpt: "My thesis project for Design & Technology 2018"
---

This is a page contains post and notes relating to my research for Design & Technology 2018

{% for post in site.categories.thesis reversed %}
	{% assign title_len = post.title | size %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{% if title_len > 0 %}{{ post.title }}{% else %}{{ "untitled" }}{% endif %}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
