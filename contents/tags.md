---
layout: page
title: タグ一覧
description: タグをまとめたページ
permalink: /tags/index.html
---

<h1>
	<i class="fas fa-fw fa-tag"></i>タグ一覧(タグ名昇順)
</h1>

<ul class="fa-ul">
	{% assign tags = site.tags | sort_array_by_name %}
	{% for tag in tags %}
		<li>
			<span class="fa-li"><i class="fas fa-fw fa-tag"></i></span>
			<a href="{{ '/tags/' | append: tag[0] | downcase | relative_url }}">
				{{ tag[0] }} ({{ tag[1].size }})
			</a>
		</li>
	{% endfor %}
</ul>
