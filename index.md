---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "我的 Awesome 项目"
  text: "一个 VitePress 站点"
  tagline: 我的项目 tagline
  image:
  src: https://avatars.githubusercontent.com/u/169712528 # 若为本地图片 请确保你的 public 目录下有这个图片
  alt: ... Logo
  actions:
    - theme: brand
      text: Markdown 示例
      link: /markdown-examples
    - theme: alt
      text: API 示例
      link: /api-examples

features:
  - title: 功能 A
    details: 示例示例示例示例示例示例示例示例示例示例示例示例示例
  - title: 功能 B
    details: 示例示例示例示例示例示例示例示例示例示例示例示例示例
  - title: 功能 C
    details: 示例示例示例示例示例示例示例示例示例示例示例示例示例

    # 网页元数据 / Web page metadata (SEO)
head:
- - meta
  - property: og:type
    content: website
- - meta
  - property: og:title
    content: Vitepress Exemple Website示例网站 - 1224HuangJin
- - meta
  - property: og:image
    content: https://avatars.githubusercontent.com/u/169712528
- - meta
  - property: og:url
    content: https://google.com/
- - meta
  - name: title
    content: Vitepress 示例网站 - 1224HuangJin
- - meta
  - name: twitter:card
    content: https://avatars.githubusercontent.com/u/169712528
- - link
  - rel: icon
    type: image/icon
    href: https://avatars.githubusercontent.com/u/169712528
---

---

<!--@include: ./README.md-->