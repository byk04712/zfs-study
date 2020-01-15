<!--
 * @Author: 秦真
 * @Date: 2020-01-13 16:30:26
 * @LastEditTime: 2020-01-13 23:21:32
 * @LastEditors: 秦真
 * @Description: 
 * @FilePath: \zfs-study\zfs-study\设计模式\单例模式\em\src\components\List.vue
 -->
<template>
  <div class="list">
    <h1>列表页</h1>
    <table cellspacing="0" width="100%">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>分数</th>
          <th>结果</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in list" :key="'item' + index" @click="$router.push({path:'/detail',query:item})">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.score }}</td>
          <td>
            <div v-if="item.isPass !== undefined" class="state" :class="{ 'pass': item.isPass }">{{ item.isPass ? '通过' : '没通过' }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import EventEmitter from '../utils/event_emitter'

export default {
  name: 'List',
  data() {
    return {
      list: []
    }
  },
  created() {
    EventEmitter.addListener('refreshList', args => {
      const findIdx = this.list.findIndex(e => e.id === args.id);
      if (findIdx !== -1) {        
        this.$set(this.list, findIdx, {
          ...this.list[findIdx],
          ...args
        });
      }
    });
  },
  mounted() {
    console.log('列表页 mounted');
    axios.post(`${window.location.origin}/goods/list`)
      .then(({ data }) => {
        console.log(data)
        this.list = data.data.list
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.state {
  color: #666;
}
.state.pass {
  color: green;
}
</style>
