<template>
    <div id="app">
        <router-link to="/">Foo</router-link>
        <router-link to="/bar">Bar</router-link>
        <router-view></router-view>
        <p> 直接访问,是走的服务器, 后续的访问,是走的客户端, 爬虫也是一般只爬取首次
            获取的内容!!!</p>
    </div>
</template>
<script>
  import Bar from './components/Bar.vue'
  import Foo from './components/Foo.vue'

  export default {
    name: "App",
    components: {
      Bar,
      Foo
    }
  }
</script>

<style scoped>

</style>
