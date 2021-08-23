---
layout: 'layouts/base.njk'
title: Components
templateEngineOverride: njk
---

<h1 class="text-xl mb-3">
	Components
</h1>

<ul>
{% for component in collections.component %}
	<li>
		<a href="{{ component.url }}" class="text-blue-50 underline">
			{{ component.data.title }}
		</a>
	</li>
{% endfor %}
</ul>