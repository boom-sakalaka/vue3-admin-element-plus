/*
 * @Author: GZH
 * @Date: 2021-11-14 15:19:52
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-14 15:21:12
 * @FilePath: \vue3-admin\src\utils\validate.js
 * @Description:
 */

/* 判断是否为外部资源 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
