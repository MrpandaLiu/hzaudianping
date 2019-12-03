<template>
  <div id="main">
    <Header title="个人中心"/>
    <div id="card">
      <div><img src="../../assets/me.png" alt="" @click="goEdit"></div>
      <div id="card_info">
        <div class="name">{{$store.state.user.nickname}}</div>
        <div style="color:white;">ID.{{$store.state.user.username}}</div>
      </div>
    </div>
    <div class="info">性别<span style="float:right;color:#666666;">{{$store.state.user.gender | newGender }}</span></div>
    <div class="info">年龄<span style="float:right;color:#666666;">{{$store.state.user.age}}</span></div>
    <div class="info">来自<span style="float:right;color:#666666;">{{$store.state.user.hometown}}</span></div>
    <div class="info">签名<span style="float:right;color:#666666;">{{$store.state.user.signature}}</span></div>
    <div id="logout" @click="handleToLogout">退出登录</div>
  </div> 
</template>

<script>
import Header from '../../components/Header'
import { clearUserInfo } from '../../utils'

export default {
    name: 'Center',
    methods: {
      goEdit() {
        this.$router.push('/centeredit')
      },
      handleToLogout() {
        clearUserInfo()
        this.$router.push('/login')
      }
    },
    components: {
      Header
    },
    beforeRouteEnter(to,from,next) {
      if(window.localStorage.getItem('username')) {
        next()
      } else {  // 排除此时地址=转向地址情况，避免dead loop
        if(to.path === '/login') {
          next();
        } else {
          next('/login')
        }
      }
    },
    filters: {
      newGender(val) {
        if(val==0) {
          return '男'
        } else if(val==1) {
          return '女'
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

#card {
  width: 100%;
  display: flex;
  height: 150px;
  align-items: center;
  background: #4aa550;
}

#card_info {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  height: 60px;
  justify-content: space-between;
}

#card img {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  margin-left: 10px;
}

#card .name {
  font-size: 20px;
  color: white;
  font-weight: bold;
}

.info {
  width: 85%;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  color: green;
}

#logout {
  margin-top:50px;
  border-bottom: 1px solid silver;
  color: red;
  font-size: 20px;
}
</style>