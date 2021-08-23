---
layout: 'layouts/base.njk'
title: FAQ
templateEngineOverride: njk
tags:
  - component
---
{% from "../../../../../components/faq/macro.njk" import dkbFaq %}

<h2 class="text-lg mb-3">
	Component: FAQ
</h2>
{{ dkbFaq({
		text: "Primary"
	})
}}
{{ dkbFaq({
		text: "Primary"
	})
}}
{{ dkbFaq({
		text: "Primary"
	})
}}