---
layout: 'layouts/base.njk'
title: Blockquote
templateEngineOverride: njk
tags:
  - component
---
{% from "../../../../../components/blockquote/macro.njk" import dkbBlockquote %}

{{ dkbBlockquote({
		quote: "<p>This is a blockquote</p>",
		cite: "This is a cite"
	})
}}