import Vue from 'vue'
import App from './App.vue'
import createRouter from './router'

// new Vue({
//   el: "#app",
//   render: h => h(App)
// })

// 把创造实例的过程, 变成函数的方式

// 服务端每次执行,都要创建一个全新的实例
export default () => {
  const router = createRouter();
  const app = new Vue({
    router, // 客户端正常使用路由
    render: h => h(App)
  })
  return {app, router} // 导出去,以供服务端也要引用
}
