const Vue = require('vue/types')
const VueServerRender = require('vue-server-renderer/types')
const fs = require('fs')
const path = require('path')

const vm = new Vue({
  data() {
    return {
      msg: "Gene",
    }
  },
  template: `<div>{{msg}}</div>`
})
// 通过服务端渲染包,去创建一个渲染器
const template = fs.readFileSync(path.resolve(__dirname, "template.html"), 'utf8')

const render = VueServerRender.createRenderer({
  template,
})

const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa();
const router = new Router()
app.use(router.routes()) // koa 应用中加载了路由系统

router.get("/", async (ctx) => {
  ctx.body = await render.renderToString(vm)
})

app.listen(3000, () => {
  console.log('服务器启动起来了,地址为:  http://localhost:3000');
})
