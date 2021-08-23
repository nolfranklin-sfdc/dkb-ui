---
layout: 'layouts/base.njk'
title: Figure
templateEngineOverride: njk
tags:
  - component
---
{% from "../../../../../components/figure/macro.njk" import dkbFigure %}

<div class="max-w-2xl">
{{ dkbFigure({
		"src":"https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1536&h=864&q=80",
		"image_classes": "rounded-lg mb-4",
		"alt":"test",
		"width": "1536",
		"height": "864",
		"figcaption": "This is a figcaption"
	})
}}
</div>