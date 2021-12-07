/*
 * @Author: GZH
 * @Date: 2021-12-07 17:13:32
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-07 17:22:24
 * @FilePath: \vue3-admin\src\utils\auth.js
 * @Description: 主动处理token失效的问题
 */
import { setItem, getItem } from '@/utils/storage'
import { TIME_STAMP, TOKEN_TIMEOUT_VALUE } from '@/constant'
/**
 * 获取时间戳的方法
 */
export function getTimeStamp() {
  return getItem(TIME_STAMP)
}

/**
 * 设置时间戳的方法
 */
export function setTimeStamp() {
  setItem(TIME_STAMP, Date.now())
}

/**
 * 是否超时的方法
 */
export function isCheckTimeout() {
  // 当前时间
  const currentTime = Date.now()
  // 缓存时间
  const timeStamp = getTimeStamp()

  return currentTime - timeStamp > TOKEN_TIMEOUT_VALUE
}
