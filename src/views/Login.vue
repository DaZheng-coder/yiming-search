<template>
  <div class="login-container">
    <h1>{{type === '/admin/login' ? '管理员登录' : type === '/user/login' ? '用户登录' : '用户注册' }}界面</h1>
    <el-form :model="ruleForm" label-position="left" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item :label="type === '/admin/login' ? '管理员' : '用户名'" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item v-if="type === '/user/register'" label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">{{type.indexOf('login') !== -1 ? '登录' : '注册'}}</el-button>
        <!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
        <el-button v-if="type === '/user/login'" @click="userRegister">用户注册</el-button>
        <el-button v-if="type === '/user/login' || type === '/user/register'" type="danger" @click="adminLogin">管理员登录</el-button>
        <el-button v-else type="danger" @click="userLogin">用户登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {userLogin,userRegister,adminLogin} from '@/api'

  export default {
    data() {
      // const USER_LOGIN = '/user/login'
      // const USER_REGISTER = '/user/register'
      // const ADMIN_LOGIN = '/admin/login'
      var checkusername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback()
        // setTimeout(() => {
        //   // if (!Number.isInteger(value)) {
        //   //   callback(new Error('请输入数字值'));
        //   // } else {
        //   //   if (value < 18) {
        //   //     callback(new Error('必须年满18岁'));
        //   //   } else {
        //   //     callback();
        //   //   }
        //   // }
        //   callback()
        // }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        // 页面类型
        type: '',
        ruleForm: {
          pass: '',
          checkPass: '',
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          username: [
            { validator: checkusername, trigger: 'blur' }
          ]
        }
      };
    },
    created () {
      this.decisionType()
    },
    methods: {
      decisionType() {
        this.type = this.$route.path
      },
      // 管理员登录
      adminLogin() {
        this.$router.replace('/admin/login')
        this.decisionType()
      },
      // 用户登录
      userLogin() {
        this.$router.replace('/user/login')
        this.decisionType()
      },
      // 用户注册
      userRegister () {
        this.$router.push('/user/register')
        this.decisionType()
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 加载中
            let loading = this.$loading({
              lock: true,
              text: this.type === '/user/register' ? '注册中' : '登录中',
              spinner: 'el-icon-loading',
              background: 'rgba(0,0,0,.7)'
            })
            // 根据type类型发送请求
            const {username:userName, pass:password} = this.ruleForm
            loading.close()
            switch(this.type) {
              case '/user/register': 
                userRegister(userName, password).then(res => {
                  this.$confirm('点击确定跳转到登录界面', '注册成功', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'success'
                  }).then(() => {
                    // 跳转到登录界面
                    this.userLogin()
                  })
                })
                break
              case '/user/login': 
                userLogin(userName,password).then(res => {
                  this.$message({
                    message: '登录成功',
                    type: 'success'
                  })
                  // 用户登录成功
                  this.$store.dispatch('setUser', res)
                  this.$router.push('/user')
                })
                break
              case '/admin/login':
                adminLogin(userName,password).then(res => {
                  this.$message({
                    message: '登录成功',
                    type: 'success'
                  })
                  // 管理员登录成功
                  console.log('管理员登录结果', res)
                  this.$store.dispatch('setUser', res)
                  this.$router.push('/admin/base/function')
                })
            }
            // setTimeout(() => {
            //   loading.close()
            // },2000)
          } else {
            this.$message({
              message: '输入格式有误，请再检查一下',
              type: 'warning'
            });
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  h1 {
    margin: 10vh;
  }
  .demo-ruleForm {
    border: 1px solid #ccc;
    padding: 50px;
    border-radius: 10px;
    width: 400px;
    padding-right: 100px;
  }
}
</style>