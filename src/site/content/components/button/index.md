---
layout: 'layouts/base.njk'
title: Button
templateEngineOverride: njk
---
{% from "../../../../../components/button/macro.njk" import dkbButton %}

<div class="p-2">
{{ dkbButton({
		text:"Try the free trial"
	})
}}
</div>