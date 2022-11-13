# electron-vue
    * 下载electron依赖失败, 可以配置国内的源. yarn -> .yarnrc | pnpm/npm -> .npmrc 
    * [vite-plugin-electron](https://github.com/electron-vite/vite-plugin-electron) 插件配置参考官网, 版本间有差异
    * electron-builder 用于electron打包构建 
    * 上下文通讯隔离[参考官网](https://www.electronjs.org/zh/docs/latest/tutorial/context-isolation#%E4%B8%8Etypescript%E4%B8%80%E5%90%8C%E4%BD%BF%E7%94%A8)

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
