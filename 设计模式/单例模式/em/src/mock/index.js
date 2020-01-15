/*
 * @Author: 秦真
 * @Date: 2020-01-13 16:58:02
 * @LastEditTime: 2020-01-13 23:23:24
 * @LastEditors: 秦真
 * @Description: 
 * @FilePath: \zfs-study\zfs-study\设计模式\单例模式\em\src\mock\index.js
 */
const Mock = require('mockjs')

const data = Mock.mock({
  'list|10': [{
    'id|+1': 1,
    name: '@cname',
    'score|20-100': 100
  }]
})

Mock.mock(/goods\/list/, 'post', () => ({
    code: 0,
    message: 'success',
    data
  })
)