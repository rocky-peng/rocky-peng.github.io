import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { componentsPlugin } from "vuepress-plugin-components";
import { searchConsolePlugin } from 'vuepress-plugin-china-search-console'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

import theme from "./theme.js";

export default defineUserConfig({
  head: [
    ["meta", {name: "referrer", content: "no-referrer-when-downgrade"}],
    ["meta", {name: "google-adsense-account", content: "ca-pub-6065963683065405"}],
    ["script", {
      async: true,
      crossOrigin: "anonymous",
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6065963683065405"
    }],
  ],
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
      title: "技术加油站",
      description: "没事的时候写写笔记，加加油！",
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
    searchConsolePlugin({
      // options ...
      baiduId: '09738e3a13024ae863696b2d3d9421c6',
      autoPushBaiduSwitch: true,
      toutiaoAutoPushId: '66b6d624306f38141d08cbfa0487891534532487b776ed3a73df815b3ed4f35cbc434964556b7d7129e9b750ed197d397efd7b0c6c715c1701396e1af40cec962b8d7c8c6655c9b00211740aa8a98e2e',
    }),
    googleAnalyticsPlugin({
      id: 'G-W9Q9J76CLH',
    }),
  ],
});
