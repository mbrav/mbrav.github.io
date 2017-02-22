---
layout: page
title: Studies
permalink: /studies
---

*Studies* is what I call writings that I have dedicated my time to articulate. These can be anything ranging from assignments, essays, to pseudo-scientific research papers.

{% for post in site.posts %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
