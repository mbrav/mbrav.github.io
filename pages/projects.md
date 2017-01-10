---
layout: page
title: Projects
permalink: /projects
---

ouch. this page needs some fixing..

<div class="container">
	{% for project in site.projects reversed %}
		<a href="{{ project.url | prepend: site.baseurl }}">
			<div class="tile" style="background-image: url('{{ project.image }}');">
				<h3>{{ project.title }}</h3>
				<span class="post-medium">{{ project.medium}}</span>
				<span class="post-meta">{{ project.date | date: "%m/%Y" }}</span>
			</div>
		</a>
	{% endfor %}
</div>
