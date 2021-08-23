---
layout: 'layouts/base.njk'
title: Embed
templateEngineOverride: njk
tags:
  - component
---
{% from "../../../../../components/embed/macro.njk" import dkbEmbed %}

<h2 class="text-lg mb-3">
	Component: Embed
</h2>

<div class="max-w-4xl">
	{{ dkbEmbed({
		})
	}}
</div>