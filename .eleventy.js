const pluginWebc = require("@11ty/eleventy-plugin-webc");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginWebc, {components: "_components/**/*.webc"});
    eleventyConfig.addPassthroughCopy("**/assets/*");
    eleventyConfig.addPassthroughCopy("*.png");
    eleventyConfig.addPassthroughCopy("*.jpg");
    return {
        dir: {
            input: "_src",
            output: "_site"
        }
    };
}