<template>
  <div class="gre-page-login">
    <header class="gre-page-login-header"></header>
    <main class="gre-page-login-main">
        <div class="gre-page-login-main-form">
          <login-logo/>
          <login-form/>
          <login-third-part/>
        </div>
    </main>
    <footer class="gre-page-login-footer"></footer>
  </div>
</template>


<script>
import LoginForm from "@/views/login/LoginForm";
import LoginLogo from "@/views/login/LoginLogo";
import LoginThirdPart from "@/views/login/LoginThirdPart";
export default {
  name: "page-login",
  components: {LoginThirdPart, LoginLogo, LoginForm},
  data(){
    return {

    }
  },
  methods:{

  },
  mounted() {

  }
}
</script>

<style>
@media screen and (max-width: 576px){
  .gre-page-login-main{
    width: 95% !important;
  }
}
</style>

<style scoped lang="scss">
.gre-page-login{
  background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
  background-repeat: no-repeat;
  background-position: center 110px;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  &-header{
    height: 40px;
  }
  &-main{
    flex: 1;
    text-align: center;
    width: 384px;
    margin: 0 auto;
    &-form{
      display: flex;
      flex-direction: column;
    }
  }
  &-footer{
    margin: 24px 0;
    text-align: center;
  }
}
</style>

<!--<template>-->
<!--  <div class="gre-page-login">-->
<!--    <header class="login-header-wrap"></header>-->
<!--    <main class="login-main-wrap">-->
<!--      <div class="login-main-wrap-body">-->
<!--        <el-tabs v-model="activeTag" @tab-click="handleTagsClick">-->
<!--          <el-tab-pane label="账号密码登录" name=""></el-tab-pane>-->
<!--          <el-tab-pane label="手机号码登录" name="second-tag"></el-tab-pane>-->
<!--        </el-tabs>-->
<!--        <el-form-->
<!--            :model="loginForm"-->
<!--            status-icon-->
<!--            :rules="rules"-->
<!--            ref="loginForm"-->
<!--            class="login-form-wrap"-->
<!--            show-message-->
<!--        >-->
<!--          <el-form-item  prop="username" v-if="activeTag === 'fist-tag'">-->
<!--            <el-input-->
<!--                v-focus-->
<!--                v-model="loginForm.username"-->
<!--                placeholder="请输入登录账号"-->
<!--                prefix-icon="iconfont icon-user"-->
<!--                class="login-form-wrap-input"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item  prop="username" v-else>-->
<!--            <el-input-->
<!--                v-focus-->
<!--                v-model="loginForm.username"-->
<!--                placeholder="请输入手机号码"-->
<!--                prefix-icon="iconfont icon-user"-->
<!--                class="login-form-wrap-input"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item  prop="password" v-if="activeTag === 'fist-tag'">-->
<!--            <el-input-->
<!--                v-focus-->
<!--                type="password"-->
<!--                v-model="loginForm.password"-->
<!--                placeholder="请输入密码"-->
<!--                prefix-icon="iconfont icon-lock"-->
<!--                show-password-->
<!--                class="login-form-wrap-input"-->
<!--            ></el-input>-->
<!--          </el-form-item>-->
<!--          <el-form-item  prop="password" v-else>-->
<!--            <el-input-->
<!--                v-focus-->
<!--                type="password"-->
<!--                v-model="loginForm.password"-->
<!--                placeholder="请输入验证码"-->
<!--                prefix-icon="iconfont icon-lock"-->
<!--                show-password-->
<!--                class="login-form-wrap-input"-->
<!--            ></el-input>-->
<!--            <el-button>-->
<!--              验证码-->
<!--            </el-button>-->
<!--          </el-form-item>-->

<!--          <el-form-item-->
<!--              class="login-form-wrap-row"-->
<!--          >-->
<!--            <el-switch-->
<!--                v-model="saveAccount"-->
<!--                inactive-text="记住账号"-->
<!--            >-->
<!--            </el-switch>-->
<!--            <el-button-->
<!--                type="text"-->
<!--            >-->
<!--              忘记密码-->
<!--            </el-button>-->
<!--          </el-form-item>-->
<!--          <el-form-item>-->
<!--            <el-button-->
<!--                type="primary"-->
<!--                class="login-form-wrap-btn"-->
<!--                :loading="loading"-->
<!--                :disabled="disable"-->
<!--                @click="handleLogin"-->
<!--            >{{loginTip}}</el-button>-->

<!--          </el-form-item>-->
<!--        </el-form>-->
<!--      </div>-->
<!--    </main>-->
<!--    <footer class="login-footer-wrap">-->

<!--    </footer>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  import LoginForm from "@/views/login/LoginForm";-->
<!--  import LoginLogo from "@/views/login/LoginLogo";-->
<!--  import LoginThirdPart from "@/views/login/LoginThirdPart";-->
<!--  export default {-->
<!--    name: "page-login",-->
<!--    components: {LoginThirdPart, LoginLogo, LoginForm},-->
<!--    comments:{LoginLogo,LoginForm,LoginThirdPart},-->
<!--    data(){-->
<!--      return {-->
<!--        loginForm: {-->
<!--          username: 'admin',-->
<!--          password: ''-->
<!--        },-->
<!--        rules:{-->
<!--          username: [-->
<!--            { required: true, message: '账号不能为空', trigger: 'blur' },-->
<!--            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }-->
<!--          ],-->
<!--          password: [-->
<!--            { required: true, message: '请输入正确的密码', trigger: 'blur' },-->
<!--          ]-->
<!--        },-->
<!--        activeTag:'fist-tag',-->
<!--        saveAccount:false,-->
<!--        redirect:'',-->
<!--        otherQuery:'',-->
<!--        loginTip: '登录',-->
<!--        loading:false,-->
<!--        disable:false,-->

<!--      }-->
<!--    },-->
<!--    methods:{-->
<!--      handleLogin(){-->
<!--        this.$refs.loginForm.validate((valid) => {-->
<!--          if (true) {-->
<!--            this.loading = true-->
<!--            this.disable = true-->
<!--            this.loginTip = '正在登录'-->
<!--            setTimeout(()=>{-->
<!--              this.$store.dispatch('login',this.loginForm).then(()=>{-->
<!--                this.$router.push({ path: this.redirect || '/', query: this.otherQuery })-->
<!--              }).catch(()=>{})-->
<!--                  .finally(()=>{-->
<!--                    this.loading = false-->
<!--                    this.disable = false-->
<!--                    this.loginTip = '登录'-->
<!--                  })-->
<!--            },1000)-->
<!--          } else {-->
<!--            this.$notify({-->
<!--              title:"错误",-->
<!--              type:'error',-->
<!--              message:"请输入合法的账号和密码"-->
<!--            })-->
<!--            return false;-->
<!--          }-->
<!--        });-->
<!--      },-->
<!--      handleTagsClick(){-->

<!--      },-->
<!--      getOtherQuery(query) {-->
<!--        return Object.keys(query).reduce((acc, cur) => {-->
<!--          if (cur !== 'redirect') {-->
<!--            acc[cur] = query[cur]-->
<!--          }-->
<!--          return acc-->
<!--        }, {})-->
<!--      }-->
<!--    },-->
<!--    watch: {-->
<!--      $route: {-->
<!--        handler: function(route) {-->
<!--          const query = route.query-->
<!--          // console.log("路由查询：",query)-->
<!--          if (query) {-->
<!--            this.redirect = query.redirect-->
<!--            this.otherQuery = this.getOtherQuery(query)-->
<!--            // console.log(this.otherQuery)-->
<!--          }-->
<!--        },-->
<!--        immediate: true-->
<!--      }-->
<!--    },-->
<!--    mounted() {-->
<!--      if (this.username === '') {-->
<!--        this.$refs.account.focus()-->
<!--      } else if (this.password === '') {-->
<!--        this.$refs.password.focus()-->
<!--      }-->
<!--    },-->
<!--  }-->
<!--</script>-->


<!--<style scoped lang="scss">-->
<!--  .login-wrapper{-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    height: 100%;-->
<!--    overflow: hidden;-->
<!--    background: #f7f7f7;-->
<!--    @media (min-width: 768px){-->
<!--      &{-->
<!--        background-image: url(~@/assets/img/view-login/bg.svg);-->
<!--        background-repeat: no-repeat;-->
<!--        background-position: 50%;-->
<!--        background-size: 100%;-->
<!--      }-->
<!--    }-->
<!--    .login-header-wrap{-->
<!--      height: 50px;-->
<!--    }-->
<!--    .login-main-wrap{-->
<!--      flex: 1 0 0;-->
<!--      display: flex;-->
<!--      justify-content: center;-->
<!--      align-items: center;-->
<!--      .login-main-wrap-body{-->
<!--        width: 368px;-->
<!--        .login-form-wrap{-->
<!--          width: 100%;-->

<!--          /deep/.el-form-item__content{-->
<!--            display: flex;-->
<!--            justify-content: space-between;-->
<!--          }-->
<!--          &-input{-->
<!--            margin-bottom: 24px;-->
<!--          }-->
<!--          &-btn{-->
<!--            width: 100%;-->
<!--            margin-bottom: 24px;-->
<!--            height: 40px;-->
<!--          }-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--    .login-footer-wrap{-->
<!--      height: 100px;-->
<!--      display: flex;-->
<!--      flex-direction: column;-->
<!--      align-items: center;-->
<!--      justify-content: center;-->
<!--    }-->
<!--  }-->

<!--</style>-->

<!--<style lang="scss">-->
<!--  .el-divider__text{-->
<!--    background-color: #f7f7f7;-->
<!--  }-->
<!--</style>-->
