import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { componentsPlugin } from "vuepress-plugin-components";
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
      title: "Just板板",
      description: "vuepress-theme-hope 的博客演示",
    }
  },

  theme,

  shouldPrefetch: false,
  plugins: [
    searchProPlugin({
      // 配置选项
      indexContent: true,

    }),
    componentsPlugin({
      // 插件选项
      components:["PDF"]
    }),
  ],
});
