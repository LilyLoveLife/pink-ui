/*
 * @Description: 
 * @version: 
 * @Author: 
 * @Date: 2023-06-24 23:57:37
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-06-25 14:55:25
 */
//   .eslintrc.cjs
module.exports =   {
    extends: ["link"],
    root: true,
    env: {
      browser: true,
      es2020: true,
      node: true,
      jest: true
    },
    globals: {
      ga: true,
      chrome: true,
      __DEV__: true
    },
    // rules: {
    //   'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    //   'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // }
  }
