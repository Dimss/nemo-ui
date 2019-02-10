const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);
    config = rewireLess.withLoaderOptions({
      javascriptEnabled: true,
      modifyVars: {
        "@primary-color": "#007e88",
        "@btn-primary-bg": "#eb6710",
        "@layout-body-background": "#fff",
        "@layout-header-background":"#b1d9ff"
      }
    })(config, env);

    return config;
};

