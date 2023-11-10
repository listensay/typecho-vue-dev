const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../listen-vue",
  devServer: {
    port: 8090,
    host: "0.0.0.0",
    https: false,
    open: true,
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/usr/themes/listen-vue/" : "/",

  pages: {
    index: {
      entry: "./src/main.js",
      template:
        process.env.NODE_ENV === "production"
          ? "./public/template.html"
          : "./public/index.html",
      filename:
        process.env.NODE_ENV === "production" ? "index.php" : "index.html",
    },
  },
});
