<template>
	<div class="welcomeShow">
		<h2>介绍</h2>
		<p>这是我自己写的 UI 库，在写的过程中我参考了很多其他的 UI 库也学习了很多东西。目前已经完成的了六个组件，我会持续写的直到把所有常见的组件都实现一遍为止。</p>
		<h2>安装</h2>
		<p>使用 yarn</p>
		<div class="markdown-body" v-html="yarnAddHtml"></div>
		<p>使用 npm</p>
		<div class="markdown-body" v-html="npmInstallHtml"></div>
		<h2>如何使用</h2>
		<p>全部引入</p>
		<div class="markdown-body" v-html="allInHtml"></div>
		<p>按需引入</p>
		<div class="markdown-body" v-html="youNeedHtml"></div>
	</div>
</template>
<script>
	const MarkdownIt = require("markdown-it");
	export default {
		name: "welcomeShow",
		created() {
			const md = new MarkdownIt();
			this.youNeedHtml = md.render(this.youNeed);
			this.allInHtml = md.render(this.allIn);
			this.yarnAddHtml = md.render(this.yarnAdd);
			this.npmInstallHtml = md.render(this.npmInstall);
		},
		data() {
			return {
				youNeedHtml: "",
				allInHtml: "",
				yarnAddHtml: "",
				npmInstallHtml: "",
				youNeed:
					`
\`\`\` js
import Vue from 'vue'
import { tButton } from 'eggplant-ui'
import './eggplant-ui/lib/eggplant-ui.min.css'
Vue.use(tButton)
\`\`\`
`,
				allIn:
					`
\`\`\` js
import Vue from 'vue'
import eggplant from 'eggplant-ui'
import './eggplant-ui/lib/eggplant-ui.min.css'
Vue.use(eggplant)
\`\`\`
`,
				yarnAdd:
					`
\`\`\` js
yarn add eggplant-ui
\`\`\`
`,
				npmInstall:
					`
\`\`\` js
npm install eggplant-ui --save
\`\`\`
`
			};
		}
	};
</script>
<style lang="sass" scoped>
</style>