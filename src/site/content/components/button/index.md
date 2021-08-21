---
layout: 'layouts/base.njk'
title: Button
templateEngineOverride: njk
---
{% from "../../../../../components/button/macro.njk" import dkbButton %}

<div class="container mx-auto my-10">
	<h2 class="text-lg mb-3">
		Large Buttons
	</h2>
	{{ dkbButton({
			text: "Primary button",
			href: "https://www.salesforce.com/",
			size: "lg",
			classes: "inline-block mb-3",
			variation: "primary",
			target:"_blank"
		})
	}}
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