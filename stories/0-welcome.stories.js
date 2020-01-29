import {welcomeShow} from "./index";
import "github-markdown-css/github-markdown.css";

export default {
	title: "综合",
	component: welcomeShow
};
export const welcome = () => ({
	components: {welcomeShow},
	template: "<welcomeShow />",
});
welcome.story = {
	name: "快速上手"
};