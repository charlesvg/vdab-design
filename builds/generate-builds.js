const litElementProdBuild = require("./lit-element-prod.build");
const staticCSSBuild = require("./static-css.build");
const litElementDevBuild = require("./lit-element-dev.build");

const generateBuilds = (env, options) => {
    const builds = [];
    if (options.mode === 'production') {
        builds.push(litElementProdBuild(env, options));
        builds.push(staticCSSBuild(env, options));
    } else {
        builds.push(litElementDevBuild(env, options));
    }
    return builds;
}

module.exports = generateBuilds;