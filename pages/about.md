---
layout: page
title: About
permalink: /
excerpt: "Michael is a creative technologist based in New York. New Media Art | Installations | Philosophy."
---

{% include slideshow.html %}

<p><img src="assets/img/head.jpg" id="portrait" alt="" /> Hi, this is Michael 👋🏼</p>

Michael is a *creative technologist*, a *new media artist*, an *activist* and a *philosopher*. Michael’s past works range from creative/experimental web projects, to speculative new media art installations. His investigations consist of artistic, philosophic, and technologic contexts — that seek to expound and reveal the contemporary human condition — at an era of proliferating false ideas and ideologies that alienate subjectivity from reality, digital technologies as a evolving simulacra of existence, nihilism, death of God, imminent contradictions within the imperialist-colonialist world order, and frequent misrepresentations about the ethics, politics and systems of power that lie beneath the guise of newly introduced technology (data tracking, AI, social media, biotechnology, space travel, etc.) and technocratic policies.

Michael recently finished his undergraduate degree in [Design & Technology](http://www.newschool.edu/parsons/bfa-design-technology/) at Parsons School of Design. Currently he is pursuing a second undergraduate degree in [Philosophy](http://www.newschool.edu/lang/philosophy/) at Eugene Lang set to be completed in May 2019. 

<!--
His other skills also entail creative coding using JavaScript, WebGL, [openFrameworks](http://openframeworks.cc/), and [Processing](https://processing.org/); as well as [3d animation](/project/infrastructural-utopia-tower), sound effect & [music production](https://soundcloud.com/mixania), and [photography](https://www.flickr.com/photos/mixania). He also enjoys reflecting through [writing](/writing) and [journaling](/journals) every once in a while.
-->

## Latest Writings
{% for post in site.categories.writing limit:4  %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
more [writings](/writing)...

## Latest Journals
{% for post in site.categories.journal limit:4  %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
more [journals](/journals)...

## Latest Work
<div class="container">
	{% for project in site.categories.work limit:3 %}
		<a href="{{ project.url | prepend: site.baseurl }}">
			<div class="tile" style="background-image: url('{{ project.image }}');">
				<div class="tile-wrapper">
					<h3>{{ project.title }}</h3>
					<span class="post-meta">{{ project.date | date: "%b / %Y" }}</span>
					<!-- <span class="post-medium">{{ project.medium}}</span> -->
				</div>
			</div>
		</a>
	{% endfor %}
</div>
more [work](/works)...

