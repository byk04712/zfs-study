<!--
 * @Author: 秦真
 * @Date: 2020-01-13 16:34:32
 * @LastEditTime: 2020-01-13 22:24:11
 * @LastEditors: 秦真
 * @Description: 
 * @FilePath: \zfs-study\zfs-study\设计模式\单例模式\em\src\components\Detail.vue
 -->
<template>
  <div class="list">
    <h1>详情页</h1>
    <table cellspacing="0" width="100%">
      <tr>
        <td>ID</td>
        <td>{{ id }}</td>
      </tr>
      <tr>
        <td>姓名</td>
        <td>{{ $route.query.name }}</td>
      </tr>
      <tr>
        <td>分数</td>
        <td>{{ $route.query.score }}</td>
      </tr>
    </table>
    <div class="footer">
      <button @click="$router.back()">返回</button>
      <button @click="onPass">通过</button>
      <button @click="onUnpass">不通过</button>
    </div>
  </div>
</template>

<script>
import EventEmitter from '../utils/event_emitter'

export default {
  name: 'detail',
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  methods: {
    onPass() {
      EventEmitter.emit('refreshList', { isPass: true, id: this.id });
      this.$router.back();
    },
    onUnpass() {
      EventEmitter.emit('refreshList', { isPass: false, id: this.id });
      this.$router.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  display: flex;
  margin-top: 20px;
  width: 96vw;
  height: 40px;
}
.footer > button {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  border: none;
  color: #FFF;
  box-sizing: border-box;
  margin: 4px;
}
.footer > button:nth-child(1) {
  background-color: #999  ;
}
.footer > button:nth-child(2) {
  background-color: green;
}
.footer > button:nth-child(3) {
  background-color: orange;
}
</style>
