<template>
    <div id="header">
      <div class="back" @click="goBack"><img src="../assets/back.png" alt=""></div>
      <div style="flex:8;">{{myTitle}}</div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            myTitle: this.title
        }
    },
    props: ['title'],
    methods: {
        goBack() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
#header {
  height: 50px;
  width: 100%;
  background: #4aa550;
  color: white;
  display: flex;
  line-height: 50px;
  text-align: center;
}

#header .back {
  flex:1;
  font-weight: bold;
}

#header .back img {
    width: 20px;
    height: 20px;
}
</style>