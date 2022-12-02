export interface ILink {
  name: string;
  href: string;
}

export type ILinks = ILink[];

export const links = [{
  name: "Gitee",
  href: "https://www.gitee.com/markthree",
}, {
  name: "Github",
  href: "https://github.com/markthree",
}];

export interface IProjectList {
  title: string;
  projects: {
    title: string;
    desc: string;
    href: string;
  }[];
}

export type ProjectLists = IProjectList[];

export const projectLists: ProjectLists = [
  {
    title: "uniapp",
    projects: [
      {
        title: "tob-ui",
        desc: "更现代的 uniapp ui",
        href: "https://github.com/dishait/tob-ui",
      },
      {
        title: "tob-use",
        desc: "uniapp 的高效 use 库",
        href: "https://github.com/dishait/tob-use",
      },
      {
        title: "tob-less",
        desc: "主题驱动的 uniapp 样式库",
        href: "https://github.com/dishait/tob-less",
      },
      {
        title: "tob-theme",
        desc: "tob-ui 的主题库",
        href: "https://github.com/dishait/tob-theme",
      },
      {
        title: "pinia-plugin-unistorage",
        desc: "uniapp 下 pinia 的本地数据缓存插件",
        href: "https://github.com/dishait/pinia-plugin-unistorage",
      },
      {
        title: "tob-mitt",
        desc: "mitt 的 uni_modules 完美迁移版本",
        href: "https://github.com/markthree/tob-mitt",
      },
    ],
  },
  {
    title: "vite",
    projects: [
      {
        title: "vite-auto-import-resolvers",
        desc: "unplugin-auto-import 的 vite resolver",
        href: "https://github.com/dishait/vite-auto-import-resolvers",
      },
      {
        title: "vite-plugin-use-modules",
        desc: "自动加载 modules",
        href: "https://github.com/dishait/vite-plugin-use-modules",
      },
      {
        title: "vite-plugin-global-api",
        desc: "vite 面向组件库的全局 api 的插件",
        href: "https://github.com/dishait/vite-plugin-global-api",
      },
      {
        title: "vite-plugin-vue-custom-blocks",
        desc: "vue sfc 的自定义块 vite 插件",
        href: "https://github.com/dishait/vite-plugin-vue-custom-blocks",
      },
      {
        title: "vite-plugin-watcher",
        desc: "vite 的文件监听插件",
        href: "https://github.com/dishait/vite-plugin-watcher",
      },
      {
        title: "vite-plugin-scan",
        desc: "动态扫描 vite 插件",
        href: "https://github.com/dishait/vite-plugin-scan",
      },
      {
        title: "vite-plugin-vue-meta-layouts",
        desc: "vite 的 vue-router 的元信息布局系统",
        href: "https://github.com/dishait/vite-plugin-vue-meta-layouts",
      },
      {
        title: "vite-plugin-vue-factory",
        desc: "vite 的 vue 可视化工程管理插件",
        href: "https://github.com/dishait/vite-plugin-vue-factory",
      },
      {
        title: "vite-plugin-removelog",
        desc: "生产环境下移除 console 的 vite 插件",
        href: "https://github.com/dishait/vite-plugin-removelog",
      },
      {
        title: "vite-plugin-builded-force-exit",
        desc: "vite 打包后强制退出的插件",
        href: "https://github.com/dishait/vite-plugin-builded-force-exit",
      },
    ],
  },
  {
    title: "template",
    projects: [
      {
        title: "tov-template",
        desc: "vite + vue3 + ts 开箱即用现代开发模板",
        href: "https://github.com/dishait/tov-template",
      },
      {
        title: "vite-plugin-template",
        desc: "开箱即用的 vite 插件模板",
        href: "https://github.com/dishait/vite-plugin-template",
      },
      {
        title: "vitepress-docs-template",
        desc: "基于 vitepress 的文档模板",
        href: "https://github.com/dishait/vitepress-docs-template",
      },
      {
        title: "vuepress-docs-template",
        desc: "基于 vuepress-next 的文档模板",
        href: "https://github.com/dishait/vuepress-docs-template",
      },
      {
        title: "tov-template-lite",
        desc: "非常轻量现代化 vite + vue3 模板",
        href: "https://github.com/dishait/tov-template-lite",
      },
      {
        title: "utools-plugin-starter",
        desc: "utools 插件的开箱即用模板",
        href: "https://github.com/markthree/utools-plugin-starter",
      },
      {
        title: "vue3-exports",
        desc:
          "开箱即用的 vite + vue3 + vitest + ts 库模板，用来打包 vue3 的 .vue 组件与 composition-api",
        href: "https://github.com/dishait/vue3-exports",
      },
      {
        title: "node-lib-template",
        desc: "开箱即用的 node 库模板",
        href: "https://github.com/markthree/node-lib-template",
      },
    ],
  },
  {
    title: "other",
    projects: [
      {
        title: "npm-csr",
        desc: "快速切换 npm 源",
        href: "https://github.com/markthree/npm-csr",
      },
      {
        title: "MShared",
        desc: "开发过程中的总结分享",
        href: "https://github.com/dishait/MShared",
      },
      {
        title: "vue-dark-switch",
        desc: "多合一的开箱即用 vue3 暗黑模式开关组件",
        href: "https://github.com/dishait/vue-dark-switch",
      },
      {
        title: "m-type-tools",
        desc: "通用 ts 的类型工具",
        href: "https://github.com/dishait/m-type-tools",
      },
      {
        title: "file-computed",
        desc: "文件型计算属性，当且仅当文件变化时才重新做计算",
        href: "https://github.com/dishait/file-computed",
      },
      {
        title: "undownload",
        desc: "all in one 的 node 下载",
        href: "https://github.com/dishait/undownload",
      },
      {
        title: "autoinstall-pkg",
        desc: "自动安装 npm 包",
        href: "https://github.com/dishait/autoinstall-pkg",
      },
    ],
  },
];
