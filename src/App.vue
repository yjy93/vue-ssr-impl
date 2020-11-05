<template>
    <div id="app">
        <h1>sdf</h1>
        <Bar></Bar>
        <Foo></Foo>
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
