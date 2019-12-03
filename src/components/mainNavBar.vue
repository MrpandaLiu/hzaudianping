<template>
    <nav-bar>
        <nav-bar-item link="/eatwhat">
            <img slot="item-icon" src="../assets/eat.png" alt="">
            <img slot="item-icon-active" src="../assets/eat-act.png" alt="">
            <div slot="item-text">今天吃啥</div>
        </nav-bar-item>
        <nav-bar-item link="/list">
            <img slot="item-icon" src="../assets/list.png" alt="">
            <img slot="item-icon-active" src="../assets/list-act.png" alt="">
            <div slot="item-text">美食一览</div>
        </nav-bar-item>
        <nav-bar-item link="/center">
            <img slot="item-icon" src="../assets/center.png" alt="">
            <img slot="item-icon-active" src="../assets/center-act.png" alt="">
            <div slot="item-text">个人中心</div>
        </nav-bar-item>
    </nav-bar>
</template>

<script>
import navBar from '@/components/navBar/navBar'
import navBarItem from '@/components/navBar/navBarItem'

export default {
    name: 'mainNavBar',
    components: {
        navBar,
        navBarItem
    }
}
</script>

<style scoped>
</style>