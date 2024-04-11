// import * as abc from './module.js'
// console.log(abc)

setTimeout(() => {
  import('./module.js').then(abc => {
  console.log(abc)
  })
}, 1000)
