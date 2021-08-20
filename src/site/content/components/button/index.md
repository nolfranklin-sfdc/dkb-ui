---
layout: 'layouts/base.njk'
title: Button
templateEngineOverride: njk
---
{% from "../../../../../components/button/macro.njk" import dkbButton %}

<div class="p-2">
{{ dkbButton({
		text: "Try free trial",
		href: "https://www.salesforce.com/",
		size: "lg",
		classes: "",
		variation: "primary",
		target:"_blank"
	})
}}
</div>