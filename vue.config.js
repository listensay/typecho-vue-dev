const { defineConfig } = require('@vue/cli-service')
let { name } = require('./theme.config.js')

// 获取版本号
let version
if (process.env.NODE_ENV === 'production') {
  version = process.env.VERSION
}

module.exports = defineConfig({
  transpileDependencies: true,
  // 打包文件名
  outputDir: `../${version}/${name}`,
  publicPath:
    process.env.NODE_ENV === 'production'
      ? `/usr/themes/${version}/${name}`
      : '/',

  pages: {
    index: {
      // 入口文件
      entry: './src/main.js',
      // 模板文件
      template:
        process.env.NODE_ENV === 'production'
          ? './public/template.html'
          : './public/index.html',
      filename:
        process.env.NODE_ENV === 'production' ? 'index.php' : 'index.html'
    }
  }
})
