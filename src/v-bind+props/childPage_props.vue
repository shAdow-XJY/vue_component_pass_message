<template>
  <div class="border">
    <h3>子组件</h3>
    <h3>获取父组件的参数为：{{passDataString}}</h3>
    只需要父子组件中的变量名都是命名为passDataString一样就行,
    父组件调用子组件中v-bind绑定该变量并赋值，子组件中props声明并直接调用即可.
  </div>
</template>

<script>
export default {
  name: "childPage_props",
  props:{
    passDataString:{
      type: String,
      require: true
    }
  }
}
</script>

<style scoped>
.border{
  padding: 4px;
  border:4px #000 solid;
}
</style>