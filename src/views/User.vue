<!--  -->
<template>
  <div class='user-contianer'>
    <div @click="$router.push('/search')" class="user-container-nav">
      <img src="../assets/imgs/home.png" alt="">
      <span>搜索首页</span>
    </div>
    <div class="user-container-content">
      <!-- 修改密码 -->
      <h2>用户页面</h2>
      <el-form label-width="100px" :model="rulePwdForm" :rules="rules" ref="rulePwdForm" class="demo-form-inline">
        <el-form-item label="修改密码:" prop="oldPwd">
          <el-input type="password" v-model="rulePwdForm.oldPwd" placeholder="请输入原密码">
            <template slot="prepend">原密码</template>
          </el-input>
        </el-form-item>
        <el-form-item prop="newPwd">
          <el-input type="password" v-model="rulePwdForm.newPwd" placeholder="请输入新密码">
            <template slot="prepend">新密码</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmitChangePwd('rulePwdForm')">提交密码修改</el-button>
        </el-form-item>
      </el-form>
      <!-- 修改用户名 -->
      <el-form label-width="100px" :model="newUser" :rules="rules" ref="newUser" class="demo-form-inline">
        <el-form-item label="修改用户名:" prop="username">
          <el-input v-model="newUser.username" placeholder="请输入新用户名">
            <template slot="prepend">新用户名</template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmitNewUser('newUser')">提交用户名修改</el-button>
        </el-form-item>
      </el-form>
      <!-- 用户注销 -->
      <el-form :inline="true" label-width="100px" class="demo-form-inline">
        <el-form-item label="用户注销:">
          <el-button type="danger" @click="deleteUser">注销用户</el-button>
        </el-form-item>
      </el-form>
      <el-form :inline="true" label-width="100px" class="demo-form-inline">
        <el-form-item label="退出登录:">
          <el-button type="danger" @click="logout">退出登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {userChangePwd, userChangeUserName, userClose} from '@/api'
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
      rulePwdForm: {
        oldPwd: '',
        newPwd: ''
      },
      newUser: {
        username: ''
      },
      rules: {
        oldPwd: [{validator: check, trigger: 'blur'}],
        newPwd: [{validator: check, trigger: 'blur'}],
        username: [{validator: check, trigger: 'blur'}],
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
    onSubmit () {},
    // 修改密码
    onSubmitChangePwd (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          userChangePwd(
            this.user.id,
            this.rulePwdForm.oldPwd,
            this.rulePwdForm.newPwd
            ).then(res => {
            this.rulePwdForm.oldPwd = ''
            this.rulePwdForm.newPwd = ''
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
    // 修改用户名
    onSubmitNewUser (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          userChangeUserName(this.user.id,this.newUser.username).then(res => {
            console.log('更改成功', res)
            this.newUser.username = ''
            this.$message({
              message: '更改用户名成功',
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
    // 注销用户
    deleteUser () {
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        userClose(this.user.id).then(res => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.$store.dispatch('setUser', null)
          this.$router.replace('/user/login')
        })
      })
    },
    // 退出登录
    logout () {
      this.$store.dispatch('userOut')
      this.$message({
        message: '退出登录成功',
        type: 'success'
      })
      this.$router.replace('/user/login')
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
.user-contianer {
  .user-container-nav {
    position: fixed;
    right: 50px;
    display: flex;
    align-items: center;
    font-weight: bolder;
    cursor: pointer;
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
  .user-container-content {
    width: 600px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px 50px 50px;
    transform: translateY(10%);
    margin: 0 auto;
  }
}
</style>