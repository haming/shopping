'use strict'
// const utils = require('./utils')
const isProduction = process.env.NODE_ENV === 'prd'
const sourceMapEnabled = isProduction
  ? true
  : false
//
// module.exports = {
//   loaders: utils.cssLoaders({
//     sourceMap: sourceMapEnabled,
//     extract: isProduction
//   }),
//   cssSourceMap: sourceMapEnabled,
//   cacheBusting: false,
//   transformToRequire: {
//     video: ['src', 'poster'],
//     source: 'src',
//     img: 'src',
//     image: 'xlink:href'
//   }
// }
