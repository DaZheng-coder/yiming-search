<!--  -->
<template>
  <div class='admin-manage'>
    <h3 style="text-align: center">管理员数据</h3>
    <el-table :data="tableData">
      <el-table-column prop="id" label="id" width="140">
        <template slot-scope="scope">
          <span v-show="!scope.row.isUpdate">{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="permission" label="权限等级" width="120">
        <template slot-scope="scope">
          <span>{{scope.row.permission}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="userName" label="用户名">
        <template slot-scope="scope">
          <span>{{scope.row.userName}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="password" label="密码">
        <template slot-scope="scope">
          <span>{{scope.row.password}}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column prop="id">
        <template slot-scope="scope">
          <el-button @click.native="change(scope.row.id)">修改</el-button>
          <el-button type="danger">删除</el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {adminGetAllAdmin} from '@/api'
import { mapState } from 'vuex';

export default {
  name: '',
  data () {
  //这里存放数据
    return {
      tableData: [],
      // update
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
    // 修改管理员
    change(id) {
      console.log('id',id)
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {
    adminGetAllAdmin(this.user.id).then(res => {
      console.log('获取成功', res)
      this.tableData = res
    }) 
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

</style>