<template>
  <div id="main">
    <Header title="档口一览"></Header>

    <div v-for="(item,index) in storelist" :key="index" class="store_card" @click="goFood(item.storeId,item.storeName,item.storeScore,item.storeFloor)">
      <div id="left_bar">
        <div class="store_img"><img :src="require('../../assets/s'+ item.storeId%3 + '.png')" alt=""></div>
        <div class="store_info">
          <div style="font-size: 18px; font-weight: bold;">{{item.storeName}} [{{item.storeFloor}}楼]</div>
          <div style="color:#666666;">评分:&nbsp;&nbsp;{{item.storeScore}}/5.0分</div>
        </div>
      </div>
      <div class="store_enter"><img src="../../assets/enter.png" alt=""></div> 
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { getStoreList } from '../../network/api'

export default {
    name: 'Store',
    data() {
      return {
        storelist: []
      }
    },
    methods: {
        goFood(id,name,score,floor) {
            this.$store.commit('store/STORE_INFO',{
              storeName: name,
              storeScore: score,
              storeFloor: floor
            })
            this.$router.push(`/listfood/${id}`)
        },
        randomImg(id) {
          let url = `../../assets/${id%2}.png`
          return url
        }
    },
    created() {
        getStoreList({
          canteenid: this.$route.params.id
        }).then((res) => {
          //console.log(res.data)
          this.storelist = res.data.storeInfo
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

#main .store_card {
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

.store_card .store_img {
  width: 60px;
  height: 60px;
  background: white;
  margin-left: 10px;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  border-radius: 10px;
}

.store_card .store_img img {
  width: 60px;
  height: 60px;
}

.store_card .store_info {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}

.store_card .store_enter {
  margin-right: 15px;
}

img {
  height: 30px;
  width: 30px;
}
</style>