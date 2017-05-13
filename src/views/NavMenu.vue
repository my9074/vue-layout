<template>
  <el-menu theme="dark" :default-active="$route.path" class="el-menu-demo" mode="horizontal" router>
    <el-menu-item index="/table/apps">处理中心</el-menu-item>
    <el-submenu index="2">
      <template slot="title">我的工作台</template>
      <el-menu-item index="/form/app">选项2</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
