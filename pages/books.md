---
layout: page
title: Books
permalink: /books
excerpt: ""
listed: false
---

This is a place where I keep track of my reading habits. Part of this motivation is to exercise my own agency over the process of quantifying different aspects of my life. In an age where almost all human actions are reduced to mere statistical data inputs, to resist is to either gain agency over this statistical process, or to become a caveman who is entirely isolated from technology. The former is an action that I take, the later is an utopian wish. 

## Books Read

{% for book in site.data.books reversed %}
  <p>
    {% if book.link %}
      <a href="{{ book.link }}"><i>{{ book.title }}</i></a>
    {% else %}
      <i>{{ book.title }}</i>
    {% endif %}
    by {{ book.author }} <br>
    read on {{ book.date | date_to_string }}
  </p>
{% endfor %}
