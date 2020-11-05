/**
 * @author: Gene
 * @age: 永远18岁的美少年
 * @Email： Genejob@163.com
 * @date: 2020-11-05 23:17:55
 * @description: 服务端 entry
 */

import createApp from './app'

export default () => {
  const {app} = createApp(); // 创建了一个应用

  return app // createRenderer().renderToString(vm)
}
