---
layout: 'layouts/base.njk'
title: Blockquote
templateEngineOverride: njk
tags:
  - component
---
{% from "../../../../../components/blockquote/macro.njk" import dkbBlockquote %}

{{ dkbBlockquote({
		quote: "<p>Donec a erat eu quam fermentum efficitur. Cras lobortis arcu diam, porttitor convallis lorem consectetur ut. Nunc aliquam nulla a dignissim pulvinar. Sed volutpat congue diam, eget scelerisque sem convallis in. Fusce ut dolor molestie mauris sagittis aliquam eu quis nisl. Mauris non volutpat augue, at lacinia mi. Maecenas faucibus ante mi, id pretium urna imperdiet eget.</p>",
		cite: "Jane Doe, Salesforce UX"
	})
}}


<pre class="bg-gray-900 rounded text-white p-10 mt-20">
<code>{% raw %}{% from "../../../../../components/blockquote/macro.njk" import dkbBlockquote %}

{{ dkbBlockquote({
		quote: "Quote text",
		cite: "Cite text"
	})
}}{% endraw %}
</code></pre>