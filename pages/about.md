---
layout: page
title: About
permalink: /
excerpt: "Michael is a creative technologist based in New York. New Media Art | Installations | Philosophy."
---

{% include slideshow.html %}

<p><img src="assets/img/head.jpg" id="portrait" alt="" /> Hi, this is Michael 👋🏼</p>

Michael is a *creative technologist*, a *new media artist*, and a *philosopher*. Michael’s past works range from creative/experimental web projects, to speculative new media art installations. His investigations consist of artistic, philosophic, and technologic contexts – that seek to expound and reveal the contemporary human condition – at a time of increased alienation from reality, existence by digital means, social death of God, and frequent misrepresentation about the ethics and politics behind newly introduced technology (data tracking, AI, social media, biotechnology, space travel, etc.).

Michael's influences include Humboldt, Hegel, Marx, Engels, Nietzsche, Heidegger, Arendt, Haraway, Azimov, Popper, Dennett, Pepperell, Bostrom, and Pasquinelli.

Michael is currently a student at Parsons School of Design studying BFA in [Design & Technology](http://www.newschool.edu/parsons/bfa-design-technology/) along with a Liberal Arts degree in [Philosophy](http://www.newschool.edu/lang/philosophy/) at Eugene Lang. His other skills also entail creative coding using JavaScript, WebGL, [openFrameworks](http://openframeworks.cc/), and [Processing](https://processing.org/); as well as [3d animation](/project/infrastructural-utopia-tower), sound effect & [music production](https://soundcloud.com/mixania), and [photography](https://www.flickr.com/photos/mixania). He also enjoys reflecting on through [writing](/writing) and [journaling](/journals) every once in a while.

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
