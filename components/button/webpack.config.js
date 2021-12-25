const staticCSSBuild = require("@vdab/vdab-design-builds/static-css.build");

const packageJson = require('./package.json');
const componentName = packageJson.name.substr('@vdab/vdab-design-component-'.length);

module.exports = (env, options) => staticCSSBuild(env, options, componentName);