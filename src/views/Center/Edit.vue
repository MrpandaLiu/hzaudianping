<template>
  <div id="main">
      <p id="title">修改资料</p>
      <span>用户名 >></span>
      <input type="text" v-model="username" readonly="readonly" placeholder="">
      <span>昵称 >></span>
      <input type="text" v-model="nickname">
      <span>密码 >></span>
      <input type="password" v-model="password">
      <span>年龄 >></span>
      <input type="text" v-model="age">
      <span>性别 >></span>
      <div id="radio">
        <div><input type="radio" name="radios" value=0 v-model="gender" class="radio"><div>男</div></div>
        <div><input type="radio" name="radios" value=1 v-model="gender" class="radio">女</div>
      </div>
      <span>来自 >></span>
      <input type="text" v-model="hometown" placeholder="例：湖北省武汉市">
      <span>签名 >></span>
      <input type="text" v-model="signature">
      <div style="text-align:center;margin-bottom: 30px;">
          <button @click="handleToUpdate">保存修改</button>
      </div>
  </div>                    
</template>

<script>
import { notNull,saveUserInfo } from '../../utils'
import { update } from '../../network/api'
 
export default {
    name: 'Edit',
    data() {
        return {
            username: localStorage.getItem('username') || '',
            nickname: localStorage.getItem('nickname') || '',
            password: localStorage.getItem('password') || '',
            age: localStorage.getItem('age') || 0,
            gender: localStorage.getItem('gender') || 0,
            hometown: localStorage.getItem('hometown') || '',
            signature: localStorage.getItem('signature') || '',
        }
    },
    methods: {
        handleToUpdate() {
            if(notNull(this.$data)) {
                update({
                    username: Number(this.username),
                    nickname: this.nickname,
                    password: this.password,
                    age: Number(this.age),
                    gender: Number(this.gender),
                    hometown: this.hometown,
                    signature: this.signature
                }).then((res) => {
                    console.log(res.data)
                    saveUserInfo(this.username,this.nickname,this.password,this.age,this.gender,this.hometown,this.signature)
                    this.$store.commit('user/USER_INFO',{
                        username: this.username,
                        nickname: this.nickname,
                        password: this.password,
                        age: this.age,
                        gender: this.gender,
                        hometown: this.hometown,
                        signature: this.signature
                    })
                    this.$router.push('/center')
                })
            } else {
                alert('请完善信息')
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
  align-items: center;
}

#main #title {
    font-size: 25px;
    color: #4aa550;
    border-bottom: 1px solid silver;
    margin: 20px 0 20px 10px;
}

#main span {
    color: green;
    font-weight: bold;
    width: 90%;
}

#main input {
    width: 90%;
    border: 1px solid silver;
    height: 40px;
    margin: 10px 0 20px 0;
}

 #main #radio {
    display: flex;
    flex-direction: column;
    margin: 10px 0 0 70px;
    width: 100%;
} 

 #main .radio {
    float: left;
    width: 15px;
    height: 15px;
    vertical-align: center;
    margin-right: 10px;
} 

#main button {
  background-color: green;
  width: 100%;
  color: white;
  border: 1px solid green;
  border-radius: 10px;
  height: 40px;
  font-size: 16px;
  padding: 5px;
  margin: 7px 0 50px 0;
}
</style>