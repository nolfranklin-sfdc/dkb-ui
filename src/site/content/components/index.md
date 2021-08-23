---
layout: 'layouts/base.njk'
title: Components
templateEngineOverride: njk
---

<ul>
{% for component in collections.component %}
	<li>
		<a href="{{ component.url }}">
			{{ component.data.title }}
		</a>
	</li>
{% endfor %}
</ul>