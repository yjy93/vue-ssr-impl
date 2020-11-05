[toc]

# 服务端渲染

> 需要安装 `webpack` 以及其他一些相关依赖.
>
> ```js
>     "@babel/core": ,  // babel 核心模块
>     "@babel/preset-env": // 将高级语法,转换成低级语法
>     "babel-loader": , // babel 和 webpack的桥梁
>     "css-loader": , // 解析样式
>     "vue-loader":, // 解析 .vue 文件
>     "vue-style-loader": , // 把样式插入到 style标签中
>     "vue-template-compiler":  // 编译vue-template 模块
>     "webpack": ",  // webpack 核心打包工具
>     "webpack-cli":  // webpack 解析命令行
>     html-webpack-plugin: // 自动将打包后的结果插入到 html中
>     webpack-dev-server  // 启动本地 dev 开发服务
> webpack-merge // 合并 webpack 多个配置的包
> 
> concurrently // 客户端 和 服务端 可以联合打包的插件,即一条命令执行多个对应的 打包命令
> ```
>
> 
>
> 