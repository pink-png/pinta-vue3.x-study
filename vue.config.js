const { defineConfig } = require('@vue/cli-service')
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

// Vue项目报错： Component name “xxx“ should always be multi-word vue/multi-word-component-names
// 在配置完 ESlint 后，要求代码格式规范的同时，也规定了组件的名称格式，要写成 “XXXName”的格式，不能是单个单词。
// 所以除了改名，另一种解决方法是在 vue.config.js 文件中加一行
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
     // 设置路径别名
    chainWebpack: config => {
      config.resolve.alias
          .set("@", resolve("src"))
          .set("assets", resolve("src/assets"))
          .set("components", resolve("src/components"))
          .set("pages", resolve("src/pages"))
          .set("store", resolve("src/store"))
    },
})
