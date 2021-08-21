---
layout: 'layouts/base.njk'
title: Button
templateEngineOverride: njk
---
{% from "../../../../../components/heading/macro.njk" import dkbHeading %}

{{ dkbHeading({
		text: "Display 1",
		href: "",
		size: "9xl",
		classes: "mb-3",
		level: 1
	})
}}

{{ dkbHeading({
		text: "Display 2",
		href: "",
		size: "8xl",
		classes: "mb-3",
		level: 2
	})
}}