import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default () => {
  const store = new Vuex.Store({
    state: {
      name: "Gene",
      age: 11
    },
    mutations: {
      changeName(state) {
        state.name = "杨阳"
      }
    },
    actions: {
      changeNameAsync({commit}) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            commit('changeName')
            resolve()
          }, 1000)
        })
      }
    }
  })
  // 表示不是服务端渲染, 是浏览器渲染
  if (typeof window !== "undefined" && window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__) // 服务端的数据替换到 浏览器的 store
  }
  return store
}
