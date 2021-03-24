<!--  -->
<template>
  <div class='home-container'>
    <!-- 导航栏 个人中心 -->
    <!-- <div @click="toUserOrAdmin" class="home-container-nav">
      <img src="../assets/imgs/user.png" alt="">
      <span>个人中心</span>
    </div> -->
    <UserOrAdmin />
    <div class="home-container-content">
      <h1>惰性搜索系统</h1>
      <div class="demo-form-inline">
        <SearchBar />
      </div>
    </div>
    <!-- 中间搜索框 -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { userLogin, userClose } from '@/api';
import SearchBar from '@/components/SearchBar'
import UserOrAdmin from '@/components/UserOrAdmin'

export default {
  name: '',
  data () {
  //这里存放数据
    return {
      // searchWords: {}
    }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {
    SearchBar,
    UserOrAdmin
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    // 跳转到用户或者管理员
    toUserOrAdmin () {
      
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    // userLogin().then(res => console.log('获取结果', res))
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  
  },
  //生命周期 - 创建之前
  beforeCreate () {}, 
  //生命周期 - 挂载之前
  beforeMount () {}, 
  //生命周期 - 更新之前
  beforeUpdate () {}, 
  //生命周期 - 更新之后
  updated () {}, 
  //生命周期 - 销毁之前
  beforeDestroy () {}, 
  //生命周期 - 销毁完成
  destroyed () {}, 
  //如果页面有keep-alive缓存功能，这个函数会触发
  activated () {}, 
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
.home-container {
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // // height: 100vh;
  // .home-container-nav {
  //   position: fixed;
  //   right: 50px;
  //   display: flex;
  //   align-items: center;
  //   font-weight: bolder;
  //   cursor: pointer;
  //   top: 10px;
  //   img {
  //     width: 30px;
  //     height: 30px;
  //     margin-right: 10px;
  //   }
  // }
  .home-container-content {
    transform: translateY(30vh);
    text-align: center;
    min-width: 500px;
    .demo-form-inline {
      display: flex;
      margin: 0 auto;
      width: 500px;
      padding-top: 25px;
    }
  }
}
  
</style>