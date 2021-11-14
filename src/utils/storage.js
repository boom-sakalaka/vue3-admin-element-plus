/*
 * @Author: GZH
 * @Date: 2021-11-14 17:30:17
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 17:36:28
 * @FilePath: \vue3-admin\src\utils\storage.js
 * @Description:
 */

/**
 * 存取数据
 */
export const setItem = (key, value) => {
  // value 分为两种情况，一种为基本数据类型，一种为复杂数据类型
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

/**
 * 获取数据
 */
export const getItem = (key) => {
  const data = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

/**
 * 删除指定数据
 */
export const removeItem = (key) => {
  window.localStorage.removeItem(key)
}

/**
 * 删除所有数据
 */
export const removeAllItem = () => {
  window.localStorage.clear()
}
