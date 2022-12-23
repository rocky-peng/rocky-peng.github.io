import { defineUserConfig } from "vuepress";
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { copyCodePlugin } from "vuepress-plugin-copy-code2";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  port: 8081,
  locales: {
    /*"/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },*/
    "/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    }
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    copyrightPlugin({
      // 插件选项
      author: "棉花糖",
      license: "MIT",
      global: true,
    }),
    copyCodePlugin({
      pure:true
    }),
    searchProPlugin({
      // 配置选项
      indexContent: true,

    }),
  ],
});
