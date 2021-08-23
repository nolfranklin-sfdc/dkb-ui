---
layout: 'layouts/base.njk'
title: Headline
templateEngineOverride: njk
tags:
  - component
---
{% from "../../../../../components/headline/macro.njk" import dkbHeadline %}

<h1 class="mb-6">
	Component: Headline
</h1>

{{ dkbHeadline({
		eyebrow_text: "Eyebrow text",
		eyebrow_classes: "text-sm",
		heading_text: "A heading of sorts",
		heading_level: 2,
		heading_size: "8xl",
		heading_classes: "text-blue-20 mb-4",
		description_text: "<p>Description text: Phasellus sit amet nulla sit amet tortor bibendum pharetra in vehicula lectus. Integer massa nibh, elementum eget auctor eu, varius nec nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed vehicula lacus.</p>",
		description_classes: "text-lg mb-4",
		ctas:[
			{
				text: "Free Trial",
				variation: "primary",
				size: "lg"
			},
			{
				text: "Explore demos",
				variation: "secondary",
				size: "lg"
			}
		]
	})
}}

<hr class="my-10" />