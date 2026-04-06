# Vitepress Template - 1224HuangJin

此Vitepress模板由 [wyf9/vitepress-template](https://github.com/wyf9/vitepress-template) 二改而来  <br> This is a modified version of [wyf9/vitepress-template](https://github.com/wyf9/vitepress-template).

## CloudFlare Pages Deploy / CF部署教程:
![CloudFlare Pages Deploy / CF部署教程](/public/images/cloudflare-deploy.png)




**下面是 [wyf9/vitepress-template](https://github.com/wyf9/vitepress-template) 的原始README** <br> **Below is the original README for [wyf9/vitepress-template](https://github.com/wyf9/vitepress-template).**

**以下内容并不代表该存储库的任何内容（LICENSE，等。。。）、仅用于参考原版模板。** <br> **The following content does not represent any content of this repository (LICENSE, etc.) and is for reference only.**

---

For self-use mainly.

Preview: [vitepress-template.wyf9.top](https://vitepress-template.wyf9.top)

## Quick start

[Use this template](https://github.com/new?template_name=vitepress-template&template_owner=wyf9)

```bash
pnpm install
pnpm update # Must do update before use
```

## Customize

Delete these files:

```bash
rm api-examples.md
rm markdown-examples.md
rm en_us/api-examples.md
rm en_us/markdown-examples.md
```

And edit these files:

```url
.vitepress/config.mts
index.md
en_us/index.md
README.md
```

### GitHub Pages deploy

If you need github pages deployment, simply go `Settings` -> `Pages` -> `Source`, select `GitHub Actions`, then enable the `Deploy VitePress site to Pages` workflow.

> [!IMPORTANT]
> Remember to change the `base` setting in `.vitepress/config.mts`, if you want to deploy your site to a sub path.

*If you don't need it, just remove `.github/workflows/deploy.yml` file.*

## Commands

```bash
pnpm dev # Start development server
pnpm build # Build site (.vitepress/dist/)
pnpm preview # Preview built site
```

## Credits

The Unlicense.
