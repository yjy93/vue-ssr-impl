/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2020-11-05 23:17:55
 * @description: 服务端 entry
 */

import createApp from './app'

// server.js 服务器路径匹配到后,传入的对象参数就能够在这里收到
// 即: 接收 renderToString 渲染执行时,传递过来的参数对象.
export default ({url}) => {
  // 我们需要在服务端, 把对应的页面,先渲染出来.
  return new Promise((resolve, reject) => {
    const {app, router} = createApp(); // 服务端创建了一个应用
    router.push(url) // 服务端路由跳转
    router.onReady(() => { // 表示组件已经准备完毕,防止有异步组件没有加载完成
      const matchComponents = router.getMatchedComponents()
      if (!matchComponents.length) { // 服务端页面跳转后, 并没有匹配到具体组件
        return reject({code: 404})
      }
      resolve(app)
    }, reject)
    // 我配置了路由懒加载, 但是没有分包
    // return app // createRenderer().renderToString(vm)
  })
}
