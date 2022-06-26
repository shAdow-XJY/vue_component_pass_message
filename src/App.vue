<template>
  <h1>vue 组件通信方法 简单demo (之后会添加其它方法……)</h1>
  <router-link :to="{name:'parentPage_props'}">父组件传参给子组件——props</router-link>
  <br>
  <router-link :to="{name:'parentPage_emit'}">子组件传参给父组件——emit</router-link>

  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
