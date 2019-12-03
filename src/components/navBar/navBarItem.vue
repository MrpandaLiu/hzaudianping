<template>
    <div id="nav-bar-item" @click="itemClick">
        <div v-if="!isActive"><slot name="item-icon"></slot></div>
        <div v-else><slot name="item-icon-active"></slot></div>
        <div :style="activeStyle"><slot name="item-text"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'NavBarItem',
    props: {
        link: {
            type: String,
            required: true
        }
    },
    computed: {
        isActive() {
            return this.$route.path.indexOf(this.link) !== -1
        },
        activeStyle() {
            return this.isActive ? { 'color': '#4aa550'} : { 'background': 'none'}
        }
    },
    methods: {
        itemClick() {
            this.$router.push(this.link)
        }
    }
}
</script>

<style scoped>
#nav-bar-item {
    flex: 1;
    padding-top: 5px;
    cursor: pointer;
    font-size: 14px;
    background:rgba(255,255,255,1);
}

#nav-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}
</style>