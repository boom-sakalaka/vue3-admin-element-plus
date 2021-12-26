/*
 * @Author: GZH
 * @Date: 2021-12-26 15:06:22
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-26 15:07:41
 * @FilePath: \vue3-admin\src\utils\tag.js
 * @Description:
 */
const whiteList = ['/login', '/404', '401']
export function isTags(path) {
  return !whiteList.includes(path)
}
