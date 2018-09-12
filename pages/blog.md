---
layout: page
title: Blog
permalink: /blog
listed: true
excerpt: "Michael's blog, writings and journals"
---

Blog are texts/excerpts/notes that I happen to write up on any particular day for whatever purpose it might be. These are not meant to be writings of a refined level. To see my more refined writing and essays, go to [Writings]({{ site.url }}/writing).

{% for post in site.categories.blog %}
	{% assign title_len = post.title | size %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{% if title_len > 0 %}{{ post.title }}{% else %}{{ "untitled" }}{% endif %}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
