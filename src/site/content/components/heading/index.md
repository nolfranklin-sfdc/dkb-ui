---
layout: 'layouts/base.njk'
title: Headings
templateEngineOverride: njk
tags:
  - component
---
{% from "../../../../../components/heading/macro.njk" import dkbHeading %}

<h1 class="mb-6">
	Component: Heading
</h1>

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
		href: "",
		size: "7xl",
		classes: "mb-6 text-blue-20",
		level: 3
	})
}}