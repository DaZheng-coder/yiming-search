<!--  -->
<template>
  <div class='search-bar-container'>
    <el-input v-model="keyWords" placeholder="请输入你要搜索的内容"></el-input>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: '',
  data () {
  //这里存放数据
    return {
      keyWords: ''
    }
  },
  //import引入的组件需要注入到对象中才能使用
  components: {},
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSubmit () {
      console.log('开始搜索', this.keyWords)
      if (this.$route.path === '/') {
        console.log('首页搜索')
      } else {
        console.log('中间搜索')
        this.$emit('getResult', this.keyWords)
      }
      this.$router.push(`/search/${this.keyWords}`)
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
.search-bar-container {
  width: 500px;
  display: flex;
}
</style>