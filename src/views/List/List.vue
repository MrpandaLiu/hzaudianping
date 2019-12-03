<template>
  <div id="main">
    <Header title="餐厅一览"></Header>
    <div v-for="(item,index) in canteenList" :key="index" class="carteen_card" @click="goStore(item.canteenId)">
      <div id="left_bar">
        <div class="carteen_img"><img :src="item.canteenImg" alt=""></div>
        <div class="carteen_info">
          <div style="font-size: 18px; font-weight: bold;">{{item.canteenName}}</div>
          <div style="color:#666666;">位置:&nbsp;&nbsp;{{item.location}}</div>
        </div>
      </div>
      <div class="carteen_enter"><img src="../../assets/enter.png" alt=""></div> 
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { getCanteenList } from '../../network/api'

export default {
    name: 'List',
    data() {
      return {
        canteenList: []
      }
    },
    methods: {
      goStore(id) {
        this.$router.push(`/liststore/${id}`)
      }
    },
    created() {
        getCanteenList().then((res) => {
          //console.log(res.data)
          this.canteenList = res.data.canteenInfo
        })    
    },
    components: {
      Header
    }
}
</script>

<style scoped>
#main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-bottom: 70px;
}

#main .carteen_card {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  background: #eeecec;
  align-items: center;
}

#left_bar {
  display: flex;
}

.carteen_card .carteen_img {
  width: 60px;
  height: 60px;
  background: white;
  margin-left: 10px;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  border-radius: 10px;
}

.carteen_card .carteen_img img {
  width: 60px;
  height: 60px;
}

.carteen_card .carteen_info {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}

.carteen_card .carteen_enter {
  margin-right: 15px;
}

img {
  height: 30px;
  width: 30px;
}
</style>