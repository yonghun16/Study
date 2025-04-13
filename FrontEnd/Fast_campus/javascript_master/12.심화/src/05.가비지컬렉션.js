// 가비지 컬렉션(GC)

// 자비스크립트의 메모리 관리 방법으로 
// 데이터가 할당된 메모리에서 더 이상 사용되지 않는 데이터를 해제하는 것을 말함.
// 가비지 컬렉션은 개발자가 직접 강제 실행하거나 관리할 수 없습니다.

let a = { x: 1 }
let b = a

b.x = 2       // x가 1로 배정한 메모리는 GC에의해 해제됨.

console.log(b)
console.log(a)
