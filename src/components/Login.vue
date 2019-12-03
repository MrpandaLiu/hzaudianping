<template>
  <div id="main">
    <div id="form">
      <div><img src="../assets/icon.png" alt=""></div>
      <p class="title">Welcome to</p>
      <p class="title">HZAU大众点评</p>
      <input type="text" v-model="username" placeholder=" 输入您的用户名">
      <input type="password" v-model="password" placeholder=" 输入您的密码">
      <button @click="handleToLogin">登&nbsp;录</button>
    </div>
    <p id="register">还没有账号?<router-link tag="span" to="/register">点击这里</router-link></p>
  </div>
</template>

<script>
import { saveUserInfo } from '../utils'
import { login } from '../network/api'

export default {
    name: 'Login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      handleToLogin() {
        if(this.username!=='' && this.password!=='') {
          login({
            username: Number(this.username),
            password: this.password
          }).then((res) => {
            //console.log(res.data)
            const errno = res.data.errno
            if(errno === 0) {
              const user = res.data.user
              const username = user.userName
              const nickname = user.nickname
              const password = user.password
              const age = user.age
              const gender = user.gender
              const hometown = user.hometown
              const signature = user.signature
              saveUserInfo(username,nickname,password,age,gender,hometown,signature)
              this.$store.commit('user/USER_INFO',{
                username: username,
                nickname: nickname,
                password: password,
                age: age,
                gender: gender,
                hometown: hometown,
                signature: signature
              })
              this.$router.push('/center')
            } else {
              alert(res.data.msg)
            }
          })
        }
      }
    }
}
</script>

<style scoped>
#main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
}

#form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
}

#form img {
  margin-top: 30px;
  margin-bottom: 30px;
  width: 150px;
  height: 130px;

}

#form .title {
  font-size: 25px;
  color: green;
}

#form input {
  margin-top: 10px;
  margin-bottom: 10px;
  height: 30px;
  border: 1px solid silver;
  border-radius: 5px;
  width: 80%;
}

#form button {
  background-color: green;
  width: 30%;
  color: white;
  border: 1px solid green;
  border-radius: 10px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  margin-top: 10px;
}

#register {
  width: 90%;
  font-size: 14px;
  text-align: right;
  margin-top: 10px;
}

#register span {
  color: green;
  cursor: pointer;
  text-decoration: underline;
}
</style>
