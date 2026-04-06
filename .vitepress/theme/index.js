import DefaultTheme from 'vitepress/theme'
import MyLayout from './Layout.vue' // 导入你刚创建的 Layout.vue
import './custom.css' // 载入 custom.css 的内容

export default {
  extends: DefaultTheme,
  // 使用自定义的 Layout 组件
  Layout: MyLayout
} 