<template>
  <div id="main">
      <Header title="美食一览"></Header>
      <div id="food_info">
          <div style="width:90%;margin: 0 auto;">
            <h2 style="margin-bottom: 20px;margin-top: 10px;">{{$store.state.store.storeName}}</h2>
            <p>综合评分: <span>{{$store.state.store.storeScore}}</span>/5.0分</p>
            <p>楼层：<span>{{$store.state.store.storeFloor}}楼</span></p>
            <p style="margin-bottom:20px;">联系方式：10086</p>              
          </div>
      </div>
      <div id="navbar">
          <div class="active" ref="tab1" @click="change(0)" style="background:#eeecec;">美食</div>
          <div class="active" ref="tab2" @click="change(1)">评论</div>
      </div>
      <div id="food_list" ref="main1">
        <div v-for="(item,index) in foodlist" :key="index" class="food_card">
            <div id="left_bar">
                <div class="food_img"><img :src="require('../../assets/'+ checkType(item.foodName))" alt=""></div>
                <div class="food_info">
                <div style="font-size: 18px; font-weight: bold;">{{item.foodName}}
                  <span v-if="item.foodCount>30" style="color:red;font-size:13px;padding-left: 5px;">Hot!</span>
                </div>
                <div style="color:orange;">售价：{{item.foodPrice}}元</div>
                </div>
            </div>
            <div class="good" @click="handleToThumbUp(item.foodId)">
              <img src="../../assets/good.png" alt=""> {{item.foodCount}}
            </div>
        </div>
      </div>
      <div id="comment_list" ref="main2">
        <div style="width: 90%;margin: 0 auto;">
          <div id="comment_area">
            <textarea name="" v-model="text" rows="7"></textarea>
            <div>
              <select name="" id="" v-model="score">
                <option :value="item.value" v-for="(item,index) in scorelist" :key="index">{{item.name}}</option>
              </select>
              <button @click="handleToSendComment">提交评论</button>
            </div>
          </div>
          <div id="all_comment">
            <p>所有评论</p>
            <div v-for="(item,index) in commentlist" :key="index" class="comment_card">
              <div>{{item.commentText}}</div>
              <div class="comment_info">
                <div class="comment_grade">评分：{{item.commentScore}}<div v-if="item.userName==$store.state.user.username" style="color:red;" @click="handleToDelComment(item.commentId)">删除评论</div></div>
                {{item.nickname}}<span style="padding-left: 10px;">{{item.commentDate}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '../../components/Header'
import { changeTab } from '../../utils'
import { getFoodList,getCommentList,sendComment,deleteComment,thumbUp } from '../../network/api'

export default {
    name: 'Food',
    data() {
      return {
        foodlist: [],
        commentlist: [],
        scorelist: [
          {
            name: '1分',
            value: 1.001
          },
          {
            name: '2分',
            value: 2.001
          },
          {
            name: '3分',
            value: 3.001
          },
          {
            name: '4分',
            value: 4.001
          },
          {
            name: '5分',
            value: 5.001
          },
        ],
        score: 0,
        text: ''
      }
    },
    created() {
      this.score = this.scorelist[2].value
      getFoodList({
          storeid: this.$route.params.id
        }).then((res) => {
          //console.log(res.data)
          this.foodlist = res.data.foodInfo
      })  
    },
    methods: {
      change(id) {
        changeTab(id,this.$refs)
        if(id === 1) {
          getCommentList({
            storeid: this.$route.params.id
          }).then((res) => {
            //console.log(res.data)
            this.commentlist = res.data.commentInfo
          })
        }
      },
      checkType(name) {
        let img
        if(name.indexOf('面') !== -1) {
          //console.log(name.indexOf('面')+'找到面了')
          img = 'mian.png'
        } else {
          img = 'fan.png'
        }
        return img
      },
      handleToSendComment() {
        if(localStorage.getItem('username')) {
          sendComment({
            username: Number(localStorage.getItem('username')),
            storeid: Number(this.$route.params.id),
            commentscore: this.score,
            commenttext: this.text
          }).then((res) => {
            //console.log(res.data)
            alert(res.data.msg)
            this.commentlist = res.data.commentInfo
            const store = res.data.storeInfo
            this.$store.commit('store/STORE_INFO',{
              storeName: store.storeName,
              storeScore: store.storeScore,
              storeFloor: store.storeFloor
            })
            this.text = ''
          })
        } else {
          alert('请先登录！')
          this.$router.push('/login')
        }
      },
      handleToThumbUp(id) {
        if(localStorage.getItem('username')) {
          thumbUp({
            foodid: id
          }).then((res) => {
            console.log(res.data)
            this.foodlist = res.data.foodInfo
          })
        } else {
          alert('请先登录！')
          this.$router.push('/login')
        }
      },
      handleToDelComment(id) {
        deleteComment({
          commentid: id
        }).then((res) => {
          //console.log(res.data)
            alert(res.data.msg)
            this.commentlist = res.data.commentInfo
            const store = res.data.storeInfo
            this.$store.commit('store/STORE_INFO',{
              storeName: store.storeName,
              storeScore: store.storeScore,
              storeFloor: store.storeFloor
            })
        }) 
      }

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

#food_info {
    width: 100%;
    line-height: 200%;
    background: url("../../assets/store.png");
    background-size: 100% 100%;
    color: rgb(2, 44, 2);
    font-weight: bold;
}

#food_info p {
    padding-left: 20px;
}

#navbar {
    margin-top: 10px;
    display: flex;
    font-size: 18px;
    width: 170px;
}

#navbar .active {
    border-radius: 5px 5px 0 0;
}

#navbar>div {
    flex: 1;
    text-align: center;
    line-height: 150%;
    cursor: pointer;
}

#main .food_card {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background: #eeecec;
  align-items: center;
  border-bottom: 1px solid #b4b4b4;
}

#left_bar {
  display: flex;
}

.food_card .food_img {
  width: 60px;
  height: 60px;
  background: white;
  margin-left: 10px;
  font-size: 20px;
  text-align: center;
  line-height: 60px;
  border-radius: 10px;
}

.food_card .food_img img {
  width: 60px;
  height: 60px;
}

.food_card .food_info {
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}

.food_card .good {
  margin-right: 20px;
}

.food_card .good img {
  width: 20px;
  height: 20px;
}

#comment_list {
  display: none;
  flex-direction: column;
  width: 100%;
  background: #eeecec;
}

#comment_area {
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: flex-end;
}

#comment_area textarea {
  border: 1px solid #4aa550;
  width: 95%;
}

#comment_area select {
  vertical-align: center;
}

#comment_area button {
  width: 100px;
  background: #4aa550;
  border: 1px solid #4aa550;
  border-radius: 10px;
  color: white;
  font-size: 15px;
  padding: 3px 0 3px 0;
  margin:10px 10px 5px 10px;
}

#all_comment {
  margin-top: 20px;
  font-size: 18px;
}

#all_comment p {
  font-size: 20px;
  padding-bottom: 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid silver;
  color: #4aa550;
}

#all_comment .comment_card {
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #4aa550;
  line-height: 200%;
}

#all_comment .comment_info {
  font-size: 15px;
  color: gray;
}

#all_comment .comment_grade {
  color: #4aa550;
  display: flex;
  justify-content: space-between;
}
</style>