import { defineConfig } from "vitepress";

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "Vitepress 模板",
  description: "一个 VitePress 站点",
// 这里是一个被注释掉的功能：  【base: "/",】 可以总是以斜杠结尾
// 添加下面这一行，告诉 VitePress 你的项目路径（不然在部署的时候会出现问题、如果不在GitHub Pages 使用，那你可以将base再次注释掉）
//  base: '/Vitepress-Template/',  
  cleanUrls: true,
  head: [
    ["link", { rel: "icon", href: "https://avatars.githubusercontent.com/u/169712528" }],
  ],
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 显示在主页右侧的logo?
    logo: 'https://avatars.githubusercontent.com/u/169712528',
    // 右上角的社交媒体
    socialLinks: [
      { icon: "github", link: "https://github.com/1224HuangJin/Vitepress-Template" },
      { icon: "discord", link: "https://discord.com/app" },
    ],

    // 搜索功能 https://vitepress.dev/zh/reference/default-theme-search
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // 如果你想翻译默认语言，请将此处设为 `root`
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                } // 结束 footer
              } // 【修复】之前这里漏掉了一个大括号，补上了结束 modal 的括号
            } // 结束 translations
          } // 结束 root
        } // 结束 locales
      } // 结束 options
    }, // 结束整个 search

    editLink: {
      pattern: "https://github.com/1224HuangJin/Vitepress-Template/edit/main/:path",
      text: "在 GitHub 上编辑本页",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "full",
        timeStyle: "full",
        forceLocale: true,
      },
    },
  }, // 【AI修复】在这里添加了 "}," 彻底关闭了全局的 themeConfig！这样后面的 markdown 和 locales 才是独立平级的。

  markdown: {
    image: {
      lazyLoading: true,
    }
  },

  locales: {
    // ==================== 简体中文配置 ====================
    root: {
      label: "简体中文",
      lang: "zh-CN", 
      themeConfig: {
        nav: [
          { text: "首页", link: "/" },
          { text: "API 示例", link: "/api-exemples" },
          { text: "MarkDown 示例", link: "/markdown-exemples" },
        ],
        // 以下为侧边栏内容
        sidebar: [
          {
            text: "侧边栏·一",
            items: [
              { text: "API 示例", link: "/api-exemples" },
            ]
          },
          {
            text: "侧边栏·二",
            items: [
              { text: "MarkDown 示例", link: "/markdown-exemples" },
            ]
          },
        ],
        footer: {
          message: '本网站上的所有内容均根据 ... License',
          copyright: 'Copyright © 2026 1224HuangJin',
        },
        editLink: {
          pattern: "https://github.com/1224HuangJin/Vitepress-Template/edit/main/:path",
          text: "在 GitHub 上编辑本页"
        }
      }
    },

    // ==================== 英文配置 ====================
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/"},
          { text: "API Exemples", link: "/en/api-exemples" },
          { text: "MarkDown Exemples", link: "/en/markdown-exemples" },
        ],
        // 以下为侧边栏内容
        sidebar: [
          {
            text: "Sidebar 1",
            items: [
              { text: "API Exemples", link: "/en/api-exemples" },
            ]
          },
          {
            text: "Sidebar 2",
            items: [
              { text: "MarkDown Exemples", link: "/en/markdown-exemples" },
            ]
          },
        ],
        footer: {
          message: 'All content on this website released under ... license',
          copyright: 'Copyright © 2026 1224HuangJin'
        },
        lastUpdated:{
          text: 'Last update at',
          formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium',
            forceLocale: true,
          }
        },                  
        editLink: {
          pattern: "https://github.com/1224HuangJin/Vitepress-Template/edit/main/:path",
          text: "Edit this page on GitHub"
        } // 结束 editLink
      } // 【AI修复】在这里补上了结束 en 的 themeConfig 的括号，理顺了结尾结构
    } // 结束 en
  } // 结束 locales
}); // 结束 defineConfig