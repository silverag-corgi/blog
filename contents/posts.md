---
layout: page
title: カテゴリ一覧
description: カテゴリをまとめたページ
permalink: /posts/index.html
---

<h1>
	<i class="fas fa-fw fa-folder"></i>カテゴリ一覧(カテゴリ名昇順)
</h1>

<ul class="fa-ul">
	{% assign categories = site.categories | sort_array_by_name %}
	{% for category in categories %}
		<li>
			<span class="fa-li"><i class="fas fa-fw fa-folder"></i></span>
			<a href="{{ '/posts/' | append: category[0] | downcase | relative_url }}">
				{{ category[0] }} ({{ category[1].size }})
			</a>
		</li>
	{% endfor %}
</ul>
