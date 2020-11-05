<template>
    <div>bar
        <button @click="show">显示弹框</button>
    </div>
</template>

<script>
  export default {
    name: "Bar",
    methods:{
      show(){
        alert(11)
      }
    }
  }
</script>

<style scoped>

</style>
