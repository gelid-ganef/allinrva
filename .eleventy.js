module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("*/assets/**");
    return {dir:{input:"_src", output:"_site"}};
}