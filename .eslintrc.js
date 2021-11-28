/*
 * @Author: GZH
 * @Date: 2021-11-13 18:51:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-11-28 21:31:29
 * @FilePath: \vue3-admin\.eslintrc.js
 * @Description:
 */
module.exports = {
  root: true, // 表示当前目录为根目录 ， Eslint 规则被限制到该目录下
  env: {
    node: true // 在node环境下启动Eslint 检测
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'], // Eslint 中基础配置需要继承的配置
  // 解析器
  parserOptions: {
    parser: 'babel-eslint'
  },
  /***
   * 需要修改的启用规则
   * 'off' 或者 0 - 关闭规则
   * warn 或 1 开启规则，不会导致程序退出
   * error 或者 2 ，当被触发时，程序会退出
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off'
  }
}
