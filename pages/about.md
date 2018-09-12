---
layout: page
title: About
permalink: /
excerpt: "Michael is a creative technologist based in New York. New Media Art | Installations | Philosophy."
listed: false
---

{% include slideshow.html %}

<p><img src="/images/head.jpg" id="portrait" alt="" /> Hi, this is Michael 👋🏼</p>

Michael is a *creative technologist*, a *philosopher*, and an *activist*. His past works range from creative/experimental projects to speculative new media art installations. His investigations consist of artistic, philosophic, and technologic contexts — that seek to expound and reveal the contemporary human condition — at an era of proliferating ideas that alienate subjectivity from authentic being in the world, digital technologies that transform reality into a simulacra, nihilist and political defeatism in the light of future prospects, death of God, imminent contradictions within the imperialist-colonialist world order, and frequent misrepresentations about the ethics, politics and systems of power that lie beneath the guise of technology (data tracking, AI, social media, biotechnology, space travel, etc.). Michael's seeks to contribute to the cause of re-affirming collective agency in building a re-imagined egalitarian future where human and non-human exploitation is abolished—where everyone is treated categorically as *ends* and not as *means*.

Michael recently finished his undergraduate degree in [Design & Technology](http://www.newschool.edu/parsons/bfa-design-technology/) at Parsons School of Design and is currently he is pursuing a second undergraduate degree in [Philosophy](http://www.newschool.edu/lang/philosophy/) at Eugene Lang set to be completed in May 2019.

<!--
His other skills also entail creative coding using JavaScript, WebGL, [openFrameworks](http://openframeworks.cc/), and [Processing](https://processing.org/); as well as [3d animation](/project/infrastructural-utopia-tower), sound effect & [music production](https://soundcloud.com/mixania), and [photography](https://www.flickr.com/photos/mixania). He also enjoys reflecting through [writing](/writing) and [blogging](/blog) every once in a while.
-->

## Latest Writings
{% for post in site.categories.writing limit:4  %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
more [writings](/writing)...

## Latest Blog Posts
{% for post in site.categories.blog limit:4  %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
more [blog posts](/blog)...

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
