<!--
 * @Author: GZH
 * @Date: 2021-12-19 16:40:18
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-19 19:05:09
 * @FilePath: \vue3-admin\src\components\ThemeSelect\components\SelectColor.vue
 * @Description:
-->
<template>
  <el-dialog
    :title="$t('msg.universal.title')"
    :model-value="modelValue"
    @close="closed"
    width="22%"
  >
    <div class="content">
      <p class="title">{{ $t('msg.theme.themeColorChange') }}</p>
      <el-color-picker v-model="myColor" :predefine="predefineColors" />
    </div>
    <template #footer>
      <el-button @click="closed">
        {{ $t('msg.universal.cancel') }}
      </el-button>

      <el-button type="primary" @click="comfirm">
        {{ $t('msg.universal.confirm') }}
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
import { useStore } from 'vuex'
import { generateNewStyle, writeNewStyle } from '@/utils/theme'

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])
const closed = () => {
  emit('update:modelValue', false)
}

/**
 * 点击确定按钮，保存到本地和vuex中
 */
const store = useStore()
const comfirm = async () => {
  const newStyle = await generateNewStyle(myColor.value)
  writeNewStyle(newStyle)
  store.commit('theme/setMainColor', myColor.value)
  closed()
}

const myColor = ref(store.getters.mainColor)
// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255,69,0,0.68)',
  'rgb(255,120,0)',
  'hsv(51,100,98)',
  'hsva(120,40,94,0.5)',
  'hsl(181,100%,37%)',
  'hsla(209,100%,56%,0.73)',
  '#c7158577'
]
</script>
<style lang="scss" scoped>
.content {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
