<template>
    <div>
        foo
        <br>
        {{$store.state.name}}
        <br>
        --->
        {{$store.state.age}}
    </div>
</template>

<script>
  export default {
    asyncData(store) {// 这个方法是供 服务端执行的., 服务端给传一个 store
      // 此方法, 必须在在页面级组件中使用
      // 这个方法必须返回一个 promise
      console.log('服务端 asyncData 获取数据 store---> ', store.state);
      return store.dispatch('changeNameAsync')
    },
    name: "Foo",
    mounted() { // 这个mounted 只在客户端执行
      console.log('客户端 mounted ---->');
      this.$store.dispatch("changeNameAsync").then(() => {

      })
    }
  }
</script>

<style scoped>
    div {
        background: red;
    }
</style>
