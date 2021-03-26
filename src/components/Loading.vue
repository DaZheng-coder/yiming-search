<!--  -->
<template>
  <div class="pswp__preloader__icn">
  <div class="pswp__preloader__cut">
    <div class="pswp__preloader__donut"></div>
  </div>
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
.pswp__preloader__icn {
  opacity:0.75;
  width: 24px;
  height: 24px;
  -webkit-animation: clockwise 500ms linear infinite;
  animation: clockwise 500ms linear infinite;
}
 
/* The idea of animating inner circle is based on Polymer loading indicator by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html */
.pswp__preloader__cut {
  position: relative;
  width: 12px;
  height: 24px;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
 
.pswp__preloader__donut {
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  border: 3px solid white;
  border-radius: 50%;
  border-left-color: transparent;
  border-bottom-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  background: none;
  margin:0;
   -webkit-animation: donut-rotate 1000ms cubic-bezier(.4,0,.22,1) infinite;
  animation: donut-rotate 1000ms cubic-bezier(.4,0,.22,1) infinite;
}
 
@-webkit-keyframes clockwise {
  0% { -webkit-transform: rotate(0deg) }
  100% { -webkit-transform: rotate(360deg) }
}
@keyframes clockwise {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
@-webkit-keyframes donut-rotate {
  0% { -webkit-transform: rotate(0) }
  50% { -webkit-transform: rotate(-140deg) }
  100% { -webkit-transform: rotate(0) }
}
@keyframes donut-rotate {
  0% { transform: rotate(0) }
  50% { transform: rotate(-140deg) }
  100% { transform: rotate(0) }
}
</style>