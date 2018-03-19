---
layout: page
title: Thesis
permalink: /thesis
listed: false
excerpt: "My thesis project for Design & Technology 2018"
---

This page contains posts, notes, work in progress, and research for my 2018 Design & Technology thesis. The name of of my project is *Data$ein*

{% for post in site.categories.thesis %}
	{% assign title_len = post.title | size %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{% if title_len > 0 %}{{ post.title }}{% else %}{{ "untitled" }}{% endif %}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
