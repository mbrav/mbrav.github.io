---
layout: page
title: About
permalink: /
excerpt: "Michael is a creative technologist who is currently based in New York. He focuses in new media art installations, as well as interaction design."
---

{% include slideshow.html %}

<p><img src="assets/img/head.jpg" id="portrait" alt="" /> Hi, this is Michael 👋🏼</p>

Michael is a *creative technologist*, *new media artist*, and a *philosopher*. Michael’s past works range from creative/experimental web projects, to speculative new media art installations. His investigations explore the peripheries where art, philosophy, and technology meet — a place where human nature is being actively tested – determining the faith of the human condition and the scope through which we perceive our existence in this world. Michael seeks to investigate the state of human relations with technology; at a time of morphing environments, increasing alienation from reality, and the advent of various forms of advancing technology (data tracking, AI, social media, biotechnology, etc.) — whose potential to conflict with humanistic values, is severely underestimated and/or ignored.

Michael is currently a student at Parsons School of Design studying BFA in [Design & Technology](http://www.newschool.edu/parsons/bfa-design-technology/) along with a Liberal Arts degree in [Philosophy](http://www.newschool.edu/lang/philosophy/) at Eugene Lang. His other skills also entail creative coding using JavaScript, WebGL, [openFrameworks](http://openframeworks.cc/), and [Processing](https://processing.org/); as well as [3d animation](/project/infrastructural-utopia-tower), sound effect & [music production](https://soundcloud.com/mixania), and [photography](https://www.flickr.com/photos/mixania). He also enjoys reflecting on through [writing](/writing) and [journaling](/journals) every once in a while.

## Latest Projects
<div class="container">
	{% for project in site.categories.project limit:3 %}
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
more [projects](/projects)...

## Latest Writings
{% for post in site.categories.writing limit:3  %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
more [writings](/writing)...

## Latest Journals
{% for post in site.categories.journal limit:3  %}
  <i class="post-list-title"><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></i>
  <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
{% endfor %}
more [journals](/journals)...
