<!--
 * @Author: GZH
 * @Date: 2021-12-26 20:31:56
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-26 20:55:24
 * @FilePath: \vue3-admin\src\components\Guide\index.vue
 * @Description:
-->
<template>
  <div>
    <el-tooltip :content="$t('msg.navBar.guide')">
      <span id="guide-start" @click="onHandleClick"><svg-icon icon="guide"></svg-icon></span>
    </el-tooltip>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './steps'

const i18n = useI18n()
let driver = null
onMounted(() => {
  // eslint-disable-next-line no-new
  driver = new Driver({
    allowClose: false,
    closeBtnText: i18n.t('msg.guide.close'),
    nextBtnText: i18n.t('msg.guide.next'),
    prevBtnText: i18n.t('msg.guide.prev'),
    doneBtnText: i18n.t('msg.guide.done')
  })
})

const onHandleClick = () => {
  driver.defineSteps(steps(i18n))
  driver.start()
}
</script>
<style lang="scss" scoped></style>
