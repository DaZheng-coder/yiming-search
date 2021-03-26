// 导入axios
import axios from 'axios';
import {Message} from 'element-ui'

// 进行一些全局配置
// 公共路由(网络请求地址)
axios.defaults.baseURL = 'http://backend.cn.utools.club/searchProject';
// 请求响应超时时间
axios.defaults.timeout = 10000;

// 封装自己的get/post方法
export default {
  get: function(path = '', data = {}) {
    return new Promise(function(resolve, reject) {
      axios.get(path, {
        params: data
      })
      .then(function(response) {
        // 按需求来，这里我需要的是response.data，所以返回response.data，一般直接返回response
        if (!response.data.code) {
          // 成功
          resolve(response.data)
        } else {
          throw new Error(response.data.message)
        }
        resolve(response.data);
      })
      .catch(function(error) {
        Message.error(error.message)
        reject(error);
      });
    });
  },
  post: function(path = '', data = {}) {
    return new Promise(function(resolve, reject) {
      axios.post(path, data)
        .then(function(response) {
          resolve(response.data);
        })
        .catch(function(error) {
          Message.error(error)
          reject(error);
        });
    });
  }
};
