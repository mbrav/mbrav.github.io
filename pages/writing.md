---
layout: page
title: Writing
permalink: /writing
excerpt: "Michael's writings and essays"
---

*Studies* is what I call writings for which I dedicated my time to articulate. These can be anything that range from assignments, essays, to pseudo-scientific research. I also maintain [Journals]({{ site.url }}/journals) where I keep my less elaborate writings.


{% for post in site.categories.writing %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
