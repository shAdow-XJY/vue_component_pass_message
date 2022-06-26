<template>
  <div class="border">
    <h3>父组件</h3>
    <h3>子组件通过emit 传给 父组件 信息: {{ passData }}</h3>
    <childPage v-on:passDataString='updateFunction'></childPage>
  </div>
</template>

<script>
import ChildPage_emit from "@/v-on+emit/childPage_emit";
export default {
  name: "parentPage_emit",
  components: {
    'childPage': ChildPage_emit
  },
  data(){
    return {
      passData : ''
    }
  },
  methods:{
    updateFunction(e){
      this.passData = e
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