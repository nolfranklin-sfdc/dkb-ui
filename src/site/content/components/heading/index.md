---
layout: 'layouts/base.njk'
title: Headings
templateEngineOverride: njk
---
{% from "../../../../../components/heading/macro.njk" import dkbHeading %}

{{ dkbHeading({
		text: "Display 1",
		href: "",
		size: "9xl",
		classes: "mb-6 text-blue-20",
		level: 1
	})
}}

{{ dkbHeading({
		text: "Display 2",
		href: "",
		size: "8xl",
		classes: "mb-8 text-blue-20",
		level: 2
	})
}}

{{ dkbHeading({
		text: "Display 3",
		href: "https://www.salesforce.com/",
		size: "7xl",
		classes: "mb-6 text-blue-60 underline hover:text-blue-30",
		level: 3
	})
}}