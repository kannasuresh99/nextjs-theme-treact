const withTM = require('next-transpile-modules')(['use-in-view']);
module.exports = withTM ({
  webpack: (config, { isServer, webpack}) => {
    if (!isServer) {
      config.node = {
        fs: "empty",
        module: "empty",
      };
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      config.plugins.push(
        new webpack.IgnorePlugin(/^(elastic-apm-node|bunyan)$/)
      );
      config.plugins.push(
          new webpack.IgnorePlugin({
            checkResource(resource, context) {
              // If I am including something from my backend directory, I am sure that this shouldn't be included in my frontend bundle
              if (
                resource.includes("/backend/") &&
                !context.includes("node_modules")
              ) {
                return true;
              }
              return false;
            },
          })
        );
    }
    
    return config
  },
})