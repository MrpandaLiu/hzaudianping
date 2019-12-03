<template>
  <div id="main">
      <h1>今天吃啥嘞？</h1>
      <ul>
        <li v-for="(item,index) in randomList" :key="index" @click="goFood(item.storeId)">{{item.foodName}}</li>
      </ul>
      <div id="change" @click="getFood()">不喜欢？换一换</div>
  </div>
</template>

<script>
import { getRandomFood,getStoreInfo } from '../network/api'

export default {
    name: 'EatWhat',
    data() {
      return {
        randomList: []
      }
    },
    methods: {
      getFood() {
        getRandomFood().then((res) => {
          //console.log(res.data)
          this.randomList = res.data.foodInfo
        })
      },
      goFood(id) {
        getStoreInfo({
          storeid: id
        }).then((res) => {
          const store = res.data.storeInfo
          this.$store.commit('store/STORE_INFO',{
              storeName: store.storeName,
              storeScore: store.storeScore,
              storeFloor: store.storeFloor
            })
        })
        this.$router.push(`/listfood/${id}`)
      }
    },
    created() {
      this.getFood()
    }
}
</script>

<style scoped>
#main {
  width: 100vw;
  height: 100vh;
  background: #4aa550;
}

#main h1 {
  font-size: 45px;
  color: white;
  text-align: center;
  letter-spacing: 0.1em;
  padding-top: 100px;
  padding-bottom: 50px;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

#main ul{
    text-align: center;
    line-height: 200%;
    font-size: 26px;
    color: white;
    list-style-type: circle;
}

#main ul li:nth-of-type(odd) {
  padding-right: 3em;
}

#main ul li:nth-of-type(even) {
  padding-left: 3em;
}

#change {
  margin-top: 80px;
  text-align: center;
  color: rgb(59, 61, 60);
}
</style>