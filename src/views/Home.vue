<!--
 * @Author: GZH
 * @Date: 2021-11-13 18:51:40
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-13 20:35:36
 * @FilePath: \vue3-admin\src\views\Home.vue
 * @Description: s
-->
<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
    name: 'Home',
    components: {
        HelloWorld
    },
    created() {
        console.log('123')
    }
}
</script>
