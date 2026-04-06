---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "My Awesome Project"
  text: "A VitePress Site"
  tagline: My great project tagline
  image:
  src: https://avatars.githubusercontent.com/u/169712528 # 若为本地图片 请确保你的 public 目录下有这个图片
  alt: ... Logo
  actions:
    - theme: brand
      text: Markdown Examples
      link: /en_us/markdown-examples
    - theme: alt
      text: API Examples
      link: /en_us/api-examples

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit

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
    content: https://google.com
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

<!--@include: ../README.md-->