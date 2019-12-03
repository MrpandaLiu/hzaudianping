<template>
  <div id="main">
      <div id="form">
        <p style="margin-top:50px;">欢迎...</p>
        <p style="margin-bottom:15px;">成为HZAU大众点评的一员</p>
        <div>
            <span>用户名<span class="white">啊</span></span><input type="text" v-model="username" placeholder="非0开头的6位数字">
        </div>
        <div>
            <span>昵称<span class="white">啊啊</span></span><input type="text" v-model="nickname">
        </div>
        <div>
            <span>密码<span class="white">啊啊</span></span><input type="password" v-model="password">
        </div>
        <div>
            <span>确认密码</span><input type="password" v-model="confirmPwd"><div v-if="isSame" id="error">！两次密码输入不一致</div>
        </div>
        <div id="button">
            <button @click="handleToRegister">完成注册</button>
        </div>
      </div>
  </div>
</template>

<script>
import { notNull } from '../utils'
import { register,getMsg } from '../network/api'

export default {
    name: 'Register',
    data() {
        return {
            username: '',
            nickname: '',
            password: '',
            confirmPwd: '',
            isSame: false
        }
    },
    watch: {
        confirmPwd: function() {
            if(this.password!='' && this.password !== this.confirmPwd) {
                this.isSame = true
            } else {
                this.isSame = false
            }
        },
        username: function() {
            let reg = /^[1-9]\d{5}/
            if(this.username.length >= 6 && !reg.test(this.username)) {
                alert('用户名格式错误')
            }
        },
        nickname: function() {
            let reg = /^[1-9]\d{5}/
            if(this.username.length < 6) {
                alert('用户名格式错误')
            }
        }
    },
    methods: {
        handleToRegister() {
            if(notNull(this.$data)) {
                register({
                    username: Number(this.username),
                    nickname: this.nickname,
                    password: this.password
                }).then((res) => {
                    const errno = res.data.errno
                    if(errno === 0) {
                        alert(res.data.msg)
                        this.$router.push('/login')
                    } else {
                        alert(res.data.msg)
                    }
                })
            } else {
                alert('请完善信息！')
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
    justify-content: center;
    align-items: center;
}

#form {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
}

.white {
    color: white;
}

#form input {
    margin-top: 20px;
    border: 1px solid silver;
    border-radius: 5px;
    margin-left: 5px;
    height: 25px;
    text-align: center;
}


#form p {
    font-size: 20px;
    color: green;
}

#error {
    color: red;
}

#button {
    margin-top: 40px;
}

#form button {
    width: 120%;
    background-color: green;
    border-radius: 10px;
    border: 1px solid green;
    color: white;
    height: 30px;
    line-height: 30px;
    font-size: 16px;
}
</style>