---
layout: page
title: Projects
permalink: /projects
---

These are some of my projects which for the most part, explore and investigate how technology shapes our human condition and understanding about the world. Projects that align with this category are mainly installations and electronic devices that have certain speculations and/or narratives.

Some of these projects are also explorations through various types of other mediums.

<div class="container">
	{% for project in site.categories.project %}
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
