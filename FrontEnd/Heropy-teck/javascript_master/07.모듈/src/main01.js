// as를 통해 이름을 바꿔 사용 가능
import abc, { str as xyz, arr, hello } from './module.js'

// 기본 내보내기의 사용
console.log(abc)

// 이름 내보내기의 사용
console.log(xyz)
console.log(arr)
console.log(hello)



// * as 이름 을 통해 객체형식으로 불러오기 가능
import * as asd from './module.js'

console.log(asd.arr)
