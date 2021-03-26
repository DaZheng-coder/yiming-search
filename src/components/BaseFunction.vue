<!--  -->
<template>
  <div class='base-function-container'>
    <!-- 修改密码 -->
    <el-form label-width="100px" :model="changePassword" :rules="rules" ref="changePassword" class="demo-form-inline">
      <el-form-item label="修改密码:" prop="oldPwd">
        <el-input type="password" v-model="changePassword.oldPwd" placeholder="请输入原密码">
          <template slot="prepend">原密码</template>
        </el-input>
      </el-form-item>
      <el-form-item type="password" prop="newPwd">
        <el-input v-model="changePassword.newPwd" placeholder="请输入新密码">
          <template slot="prepend">新密码</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmitChangePwd('changePassword')">提交密码修改</el-button>
      </el-form-item>
    </el-form>
    <!-- 更新热搜 -->
    <el-form label-width="100px" :model="changePassword" class="demo-form-inline">
      <el-form-item label="热搜更新:">
        <el-button type="danger" @click="updateHotSearch">更新热搜</el-button>
      </el-form-item>
    </el-form>
    <el-form label-width="100px" :model="changePassword" class="demo-form-inline">
      <el-form-item label="退出登录:">
        <el-button type="danger" @click="logout">退出登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {adminChangePwd,adminStatistics} from '@/api'
import {mapState} from 'vuex'

export default {
  name: '',
  data () {
  //这里存放数据
    var check = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('不能为空'))
      } else {
        callback()
      }
    }
    return {
      changePassword: {
        oldPwd: '',
        newPwd: ''
      },
      rules: {
        oldPwd: [{validator: check, trigger: 'blur'}],
        newPwd: [{validator: check, trigger: 'blur'}]
      }
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
    // 更改密码
    onSubmitChangePwd(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          adminChangePwd(
            this.user.id,
            this.changePassword.oldPwd,
            this.changePassword.newPwd
            ).then(res => {
            this.changePassword.oldPwd = ''
            this.changePassword.newPwd = ''
            this.$message({
              message: '更改密码成功',
              type: 'success'
            })
          })
        } else {
          this.$message({
            message: '输入格式有误，请再检查一下',
            type: 'warning'
          });
          return false;
        }
      })
    },
    // 更新热搜
    updateHotSearch () {
      let loading = this.$loading({
        lock: true,
        text: '更新中',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,.7)'
      })
      adminStatistics(this.user.id).then(res => {
        this.$message({
          message: '更新热搜成功',
          type: 'success'
        })
        loading.close()
      })
    },
    // 退出登录
    logout () {
      this.$store.dispatch('userOut')
      this.$message({
        message: '退出登录成功',
        type: 'success'
      })
      this.$router.replace('/admin/login')
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
.base-function-container {
  // padding-right: 25vw;
}
</style>