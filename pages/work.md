---
layout: about
title: Work
permalink: /works
excerpt: "Michael's projects, installations, and artwork"
---

These are some of my works which for the most part, explore and investigate how technology shapes our human condition and understanding about the world. Works that align with this category are mainly installations and electronic devices that have certain speculations and/or narratives.

Some of these works are also explorations in various other types of mediums.

<div class="container">
	{% for project in site.categories.work %}
		<a id= "{{ project.title | slugify}}" href="{{ project.url | prepend: site.baseurl }}">
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
