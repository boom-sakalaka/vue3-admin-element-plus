<!--
 * @Author: GZH
 * @Date: 2021-12-26 15:17:05
 * @LastEditors: GZH
 * @LastEditTime: 2022-01-04 21:22:49
 * @FilePath: \vue3-admin-element-plus\src\components\tagsView\index.vue
 * @Description:
-->
<template>
  <div class="tags-view-container">
    <router-link
      v-for="(tag, index) in $store.getters.tagsViewList"
      :key="tag.fullPath"
      class="tags-view-item"
      :class="isActive(tag) ? 'active' : ''"
      :to="{ path: tag.fullPath }"
      :style="{
        backgroundColor: isActive(tag) ? $store.getters.cssVar.menuBg : '',
        borderColor: isActive(tag) ? $store.getters.cssVar.menuBg : ''
      }"
      @contextmenu.prevent="openMenu($event, index)"
      >{{ tag.title }}
      <i
        v-show="!isActive(tag)"
        class="el-icon-close"
        @click.prevent.stop="onCloseClick(index)"
      ></i>
    </router-link>

    <context-menu v-show="visible" :style="menuStyle" :index="selectIndex"></context-menu>
  </div>
</template>

<script setup>
import { onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import ContextMenu from './ContextMenu.vue'

const route = useRoute()
const isActive = (tag) => {
  return tag.path === route.path
}

// 鼠标右键
const visible = ref(false)
const menuStyle = ref({
  left: 0,
  top: 0
})
const selectIndex = ref(0)
const openMenu = (e, index) => {
  const { x, y } = e
  menuStyle.value.left = x + 'px'
  menuStyle.value.top = y + 'px'
  visible.value = true
  selectIndex.value = index
}

// 关闭tag的事件
const store = useStore()
const onCloseClick = (index) => {
  store.commit('app/removeTagsView', {
    type: 'index',
    index
  })
}

const closeMenu = () => {
  visible.value = false
}

watch(visible, (val) => {
  if (val) {
    document.body.addEventListener('click', closeMenu)
  } else {
    document.body.removeEventListener('click', closeMenu)
  }
})

onUnmounted(() => {
  document.body.removeEventListener('click', closeMenu)
})
</script>
<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &.first-of-type {
      margin-left: 15px;
    }
    &.last-of-type {
      margin-right: 15px;
    }
    &.active {
      color: #fff;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 4px;
      }
    }
    .el-icon-close {
      width: 16px;
      height: 16px;
      line-height: 10px;
      vertical-align: 2px;
      border-radius: 50%;
      text-align: center;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.353, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(0.6);
        display: inline-block;
        vertical-align: -3px;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
