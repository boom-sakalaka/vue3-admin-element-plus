<!--
 * @Author: GZH
 * @Date: 2021-12-19 14:45:47
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-19 17:09:25
 * @FilePath: \vue3-admin\src\components\ThemeSelect\index.vue
 * @Description:
-->

<template>
  <el-dropdown v-bind="$attrs" trigger="click" class="theme" @command="handleSetTheme">
    <div>
      <el-tooltip :content="$t('msg.theme.themeChange')" placement="bottom">
        <span> <svg-icon icon="change-theme"></svg-icon></span>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">{{ $t('msg.theme.themeColorChange') }}</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- 弹出层 -->
  <div>
    <select-color v-model="selectColorVisible"></select-color>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectColor from '@/components/ThemeSelect/components/SelectColor'

// dialog
const selectColorVisible = ref(false)

const handleSetTheme = (command) => {
  selectColorVisible.value = true
}
</script>
<style lang="scss" scoped></style>
