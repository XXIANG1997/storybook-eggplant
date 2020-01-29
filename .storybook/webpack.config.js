module.exports = ({config}) => {
	config.module.rules.push({
		test: /\.vue$/,
		loader: "vue-docgen-loader",
		enforce: "post"
	});
	config.module.rules.push({
		test: /\.html$/i,
		loader: "html-loader",
	});
	return config;
};