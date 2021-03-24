<!--  -->
<template>
  <div @click="toUserOrAdmin" class="user-or-admin">
    <img src="../assets/imgs/user.png" alt="">
    <span>个人中心</span>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { mapState } from 'vuex';

export default {
  name: '',
  data () {
  //这里存放数据
    return {
  
    }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  //监听属性 类似于data概念
  computed: {
    ...mapState(['user'])
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toUserOrAdmin () {
      const userLogined = this.user ? true : false
      const isAdmin = this.user.permission ? true : false
      if (userLogined) {
        if (isAdmin) {
          this.$router.push('/admin/base/function')
        } else {
          this.$router.push('/user')
        }
      } else {
        this.$message({
          message: '还未登陆，请您登录',
          type: 'error'
        })
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    
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
.user-or-admin {
  position: fixed;
  right: 50px;
  display: flex;
  align-items: center;
  font-weight: bolder;
  cursor: pointer;
  top: 10px;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
}
</style>