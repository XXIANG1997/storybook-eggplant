import {
	tButton,
	tButtonGroup,
	tRow,
	tCol,
	tTabs,
	tTabsBody,
	tTabsHead,
	tTabsItem,
	tTabsPane,
	tCollapse,
	tCollapseItem,
	tBreadcrumb,
	tBreadcrumbItem,
	tTooltip
} from "./index";
import {storiesOf} from "@storybook/vue";
import {withInfo} from "storybook-addon-vue-info";
import {withKnobs, text} from "@storybook/addon-knobs";
import buttonShowHtml from "./code/buttonShow.html";
import girdShowHtml from "./code/gridShow.html";
import tabsShowHtml from "./code/tabsShow.html";
import collapseShow from "./code/collapseShow.html";
import breadcrumbSHow from "./code/breadcrumbShow.html";
import tooltipShow from "./code/tooltipShow.html";

const api = storiesOf("基础", module)
	.addDecorator(withInfo).addDecorator(withKnobs);
api.add(
	"按钮",
	() => ({
		components: {"t-button": tButton, "t-button-group": tButtonGroup},
		template: buttonShowHtml
	}),
	{
		info: true
	}
);
api.add(
	"grid 布局",
	() => ({
		components: {
			"t-row": tRow,
			"t-col": tCol
		},
		template: girdShowHtml
	}), {
		info: true
	}
);
api.add(
	"tabs 选项卡",
	() => ({
		components: {
			"t-tabs": tTabs,
			"t-tabs-head": tTabsHead,
			"t-tabs-item": tTabsItem,
			"t-tabs-body": tTabsBody,
			"t-tabs-pane": tTabsPane
		},
		data() {
			return {
				selectOne: text("selectOne", "one"),
				selectTwo: text("selectTwo", "two")
			};
		},
		template: tabsShowHtml
	}), {
		info: true,
	}
);
api.add(
	"collapse 折叠面板",
	() => ({
		components: {
			"t-collapse": tCollapse,
			"t-collapse-item": tCollapseItem
		},
		data() {
			return {
				selected: ["one", "two"]
			};
		},
		template: collapseShow
	}),
	{
		info: true
	}
);
api.add(
	"breadcrumb 面包屑",
	() => ({
		components: {
			"t-breadcrumb": tBreadcrumb,
			"t-breadcrumb-item": tBreadcrumbItem
		},
		template: breadcrumbSHow
	}),
	{
		info: true
	}
);
api.add(
	"tooltip 文字提示",
	() => ({
		components: {
			"t-button": tButton,
			"t-tooltip": tTooltip,
		},
		template: tooltipShow
	}),
	{
		info: true
	}
);