<template>
  <div class="border">
    <h3>子组件</h3>
    <h3 @click="toParent">点击！！传给父组件的参数为：我就是传过来的参数</h3>
    只需要父子组件中的函数名都是命名为passDataString(或其他)一样就行,
    子组件中调用this.$emit('passDataString',数据)，
    父组件调用子组件时v-on:passDataString = 函数名(e)，e即为子组件传来的‘数据’
  </div>
</template>

<script>
export default {
  name: "childPage_emit",
  // eslint-disable-next-line no-unused-vars
  setup(props,context){
    const toParent = () => {
      context.emit('passDataString','我就是传过来的参数');
    }
    return {
      toParent
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