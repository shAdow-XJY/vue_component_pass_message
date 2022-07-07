# vue_pass_message
    练习vue组件通信的demo项目，记录保存下来，以便回顾。

## website
   [https://shadowplusing.website/vue_component_pass_message/](https://shadowplusing.website/vue_component_pass_message/)

## debug
   修复router-view打包后无法显示问题，主要是route的index.js里面写法出错问题。
```
    {
        path:'/parentPage_emit',
        name:'parentPage_emit',
        component: () => import('../v-on+emit/parentPage_emit')
    }
```
中的component之前写错成了
```
    component: import('../v-on+emit/parentPage_emit')
```
本地运行时正常的，但是打包后就会出错，因为这是用到router的懒加载，写法错了。
## reference
1. [vue3学习笔记之emit](https://juejin.cn/post/7026343868773875720)
2. [Vue3全局组件通信之EventBus](https://www.jianshu.com/p/d8d55d8f0c48)

## build reference
1. [vue.js项目创建打包部署过程 - 简书 (jianshu.com)](https://www.jianshu.com/p/5d90d862f80e)
2. [(3条消息) vue项目打包发布到线上We‘re sorry but xxxx doesn‘t work properly without JavaScript enabled_Frontend-Lsj的博客-CSDN博客](https://blog.csdn.net/qq_43299315/article/details/108749318)


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
