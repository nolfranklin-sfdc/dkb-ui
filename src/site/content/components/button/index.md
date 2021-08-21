---
layout: 'layouts/base.njk'
title: Button
templateEngineOverride: njk
---
{% from "../../../../../components/button/macro.njk" import dkbButton %}

<div class="p-2">
{{ dkbButton({
		text: "Primary button",
		href: "https://www.salesforce.com/",
		size: "lg",
		classes: "inline-block",
		variation: "primary",
		target:"_blank"
	})
}}
</div>

<div class="p-2">
{{ dkbButton({
		text: "Secondary button",
		href: "https://www.salesforce.com/",
		size: "lg",
		classes: "inline-block",
		variation: "secondary",
		target:"_blank"
	})
}}
</div>