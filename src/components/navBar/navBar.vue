<template>
    <div id="nav-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'navBar'
}
</script>

<style scoped>
#nav-bar {
    display: flex;
    flex-direction: row;
}
</style>