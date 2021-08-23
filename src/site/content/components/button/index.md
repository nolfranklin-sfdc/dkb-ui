---
layout: 'layouts/base.njk'
title: Button
templateEngineOverride: njk
tags:
  - component
---
{% from "../../../../../components/button/macro.njk" import dkbButton %}

<h2 class="text-lg mb-3">
	Large Buttons
</h2>
{{ dkbButton({
		text: "Primary",
		href: "https://www.salesforce.com/",
		size: "lg",
		classes: "inline-block mb-3",
		variation: "primary",
		target:"_blank"
	})
}}
{{ dkbButton({
		text: "Secondary",
		href: "https://www.salesforce.com/",
		size: "lg",
		classes: "inline-block",
		variation: "secondary",
		target:"_blank"
	})
}}
{{ dkbButton({
		text: "Tertiary",
		href: "https://www.salesforce.com/",
		size: "lg",
		classes: "inline-block",
		variation: "tertiary",
		target:"_blank"
	})
}}


<h2 class="text-lg mb-3">
	Medium Buttons
</h2>
{{ dkbButton({
		text: "Primary",
		href: "https://www.salesforce.com/",
		size: "md",
		classes: "inline-block mb-3",
		variation: "primary",
		target:"_blank"
	})
}}
{{ dkbButton({
		text: "Secondary",
		href: "https://www.salesforce.com/",
		size: "md",
		classes: "inline-block",
		variation: "secondary",
		target:"_blank"
	})
}}
{{ dkbButton({
		text: "Tertiary",
		href: "https://www.salesforce.com/",
		size: "md",
		classes: "inline-block",
		variation: "tertiary",
		target:"_blank"
	})
}}


<h2 class="text-lg mb-3">
	Small Buttons
</h2>
{{ dkbButton({
		text: "Primary",
		href: "https://www.salesforce.com/",
		size: "sm",
		classes: "inline-block mb-3",
		variation: "primary",
		target:"_blank"
	})
}}
{{ dkbButton({
		text: "Secondary",
		href: "https://www.salesforce.com/",
		size: "sm",
		classes: "inline-block",
		variation: "secondary",
		target:"_blank"
	})
}}
{{ dkbButton({
		text: "Tertiary",
		href: "https://www.salesforce.com/",
		size: "sm",
		classes: "inline-block",
		variation: "tertiary",
		target:"_blank"
	})
}}