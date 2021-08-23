---
layout: 'layouts/base.njk'
title: Card
templateEngineOverride: njk
tags:
  - component
---
{#
{% from "../../../../../components/card/macro.njk" import dkbCard %}

<h2 class="text-lg mb-3">
	Large Buttons
</h2>

{{ dkbCard(
		card_set=1,
		card_url=item.url,
		image={
			"image_src":image,
			"image_classes": "rounded-lg mb-4",
			"image_alt":"test",
			"image_width": "768",
			"image_height": "432"
		},
		content={
			"eyebrow_text": "Explore",
			"eyebrow_classes":"text-blue-20 mb-2 block",
			"heading_url": item.url,
			"heading_text":item.title,
			"heading_level":2,
			"heading_classes":"mb-4 text-blue-20 hover:text-blue-50 hover:underline",
			"description_text": description,
			"description_classes":"text-xl"
		}
	)
}}
#}