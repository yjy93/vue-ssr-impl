const Vue = require('vue')
const VueServerRenderer = require('vue-server-renderer')
const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const fs = require('fs')
const static = require('koa-static')

let bundle = fs.readFileSync(path.resolve(__dirname, "dist/server.bundle.js"), "utf8")
let template = fs.readFileSync(path.resolve(__dirname, "public/index.ssr.html"), "utf8")
const render = VueServerRenderer.createBundleRenderer(bundle, { // 使用服务端打包的结果渲染成字符串
  template
})
const app = new Koa()
const router = new Router()
app.use(router.routes())
app.use(static(path.resolve(__dirname, "dist")))

router.get("/", async (ctx) => {
  // 虽然本身是promise ,但是使用 async 和 await 本身不能解决样式的问题, 只能通过回调的方式.
  ctx.body = await new Promise((resolve, reject) => {
    render.renderToString((err, html) => {
      resolve(html)
    })
  })
})

app.listen(3000, () => {
  console.log("http://localhost:3000");
})
