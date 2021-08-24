---
layout: 'layouts/base.njk'
title: FAQ
templateEngineOverride: njk
tags:
  - component
---
{% from "../../../../../components/faq/macro.njk" import dkbFaq %}

<h2 class="text-lg mb-3">
	Component: FAQ
</h2>
<div class="faqs max-w-2xl my-10">
{{ dkbFaq({
		title: "What is Sales Cloud?",
		content: "<p>Getting back to growth may be easier than you think — <a href='#'>no matter your company's size</a>, industry, or geography. You can increase rep productivity and grow revenue by putting all your sales activities on a single platform.</p>"
	})
}}
{{ dkbFaq({
		title: "How can Sales Cloud help my business grow?",
		content: "<p>Getting back to growth may be easier than you think — no matter your company's size, industry, or geography. You can increase rep productivity and grow revenue by putting all your sales activities on a single platform.</p>"
	})
}}
{{ dkbFaq({
		title: "How secure is my data in Sales Cloud?",
		content: "<p>Getting back to growth may be easier than you think — no matter your company's size, industry, or geography. You can increase rep productivity and grow revenue by putting all your sales activities on a single platform.</p>"
	})
}}
</div>