<template>
  <div class="border">
    <h3>父组件</h3>
    <h3 @click="toChild">点击！！！父组件通过子组件的props 传给 子组件 信息: 我就是传过来的参数</h3>
    <childPage v-bind:passDataString = passData></childPage>
  </div>
</template>

<script>
import ChildPage_props from "@/v-bind+props/childPage_props";
export default {
  name: "parentPage_props",
  components: {
    'childPage': ChildPage_props
  },
  data(){
    return {
      passData : ''
    }
  },
  methods:{
    toChild(){
      this.passData = '我就是传过来的参数'
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