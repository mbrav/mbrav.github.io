---
layout: page
title: Writing
permalink: /writing
excerpt: "Michael's writings and essays"
---

These are writings that I dedicated my time to articulate. These can range from assignments, essays, and philosophy. I also maintain [Journals]({{ site.url }}/journals) where I keep my less elaborate writings.


{% for post in site.categories.writing %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
