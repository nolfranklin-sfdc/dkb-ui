---
title: Blockquote
templateEngineOverride: njk
---
{% from "../../../../../components/blockquote/macro.njk" import dkbBlockquote %}

{{ dkbBlockquote({
		quote: "<p>This is a blockquote</p>",
		cite: "This is a cite"
	})
}}