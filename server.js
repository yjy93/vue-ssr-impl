const Vue = require('vue')
const VueServerRenderer = require('vue-server-renderer')
const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const static = require('koa-static')

let bundle = fs.readFileSync(path.resolve(__dirname, "dist/server.bundle.js"), "utf8")
let template = fs.readFileSync(path.resolve(__dirname, "dist/index.ssr.html"), "utf8")
const render = VueServerRenderer.createBundleRenderer(bundle, { // 使用服务端打包的结果渲染成字符串
  template
})
const app = new Koa()
const router = new Router()


// 先找静态文件 再找路由 *
// 如果先匹配路由, 不管访问什么, 都会走到路由匹配中.
app.use(static(path.resolve(__dirname, "dist")))

// router.get("/", async (ctx) => {
//   // 虽然本身是promise ,但是使用 async 和 await 本身不能解决样式的问题, 只能通过回调的方式.
//   ctx.body = await new Promise((resolve, reject) => {
//     render.renderToString((err, html) => {
//       resolve(html)
//     })
//   })
// })

// 当访问任意路径时,都可以匹配到
router.get("/(.*)", async (ctx) => {
  ctx.body = await new Promise((resolve, reject) => {
    // renderToString 是可以传入参数的, 调用 renderToString 就会渲染页面, 渲染页面的时候,就会调用
    // server.bundle.js, server.bundle.js 里面有个函数,就可以在这里把参数传过去给那个函数
    // 也就是在 server-entry.js 的那个函数里,可以接收到这里传入的对象 {url:ctx.url} 这个对象参数.
    render.renderToString({url: ctx.url}, (err, html) => {
      if (err && err.code == 404) {
        return resolve("<h1>啊哦, 你访问的页面飞走了!</h1>")
      }
      resolve(html) // 当前路径访问不到,直接返回首页, 前端路由会根据路径,进行跳转
    })
  })
})

app.use(router.routes())
app.listen(3000, () => {
  console.log("http://localhost:3000");
})
