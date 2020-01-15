<!--
 * @Author: 秦真
 * @Date: 2020-01-13 16:30:26
 * @LastEditTime: 2020-01-13 22:55:38
 * @LastEditors: 秦真
 * @Description: 
 * @FilePath: \zfs-study\zfs-study\设计模式\单例模式\em\src\App.vue
 -->
<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table, tr, td {
  border: 1px #EEE solid;
}
tr {
  height: 40px;
  line-height: 40px;
}
</style>
