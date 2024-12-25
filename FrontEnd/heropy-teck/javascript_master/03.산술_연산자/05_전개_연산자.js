/* 전개 연산자(Spread Operator) */
//Spread Operator는 배열 데이터의 대괄호를 날려주는 역할을 한다.
//배열을 병합 할 때 유용
console.log()
console.log('배열을 병합하는 경우')
const a = [1, 2, 3]
const b = [4, 5, 6]

const c = a.concat(b)    // 배열 병함[1, 2, 3, 4, 5, 6]
console.log(c)

const d = [a, b]    // [[1, 2, 3], [4, 5, 6]]
const e = [...a, ...b]    // [1, 2, 3, 4, 5, 6]
console.log(d)
console.log(e)


// Object를 병합 할 때도 유용
console.log()
console.log('Object를 병합하는 경우')
const f = { x: 1, y: 2}
const g = { y: 3, z: 4}

const h = Object.assign({}, f, g)    // 객체 병합 { x: 1, y: 3, z: 4 } -> g의 요소가 f에 덮어씌워지므로 f객체의 y요소는 3으로 덮어씌워짐
console.log(h)

const i = {f, g}    // { f: { x: 1, y: 2 }, g: { y: 3, z: 4 } }
const j = {...f, ...g}    // { x: 1, y: 3, z: 4 }
console.log(i)
console.log(j)


// 함수에 배열에 저장된 값들을 인자로 전달 할 때 유용
console.log()
console.log('Function에 배열에 저장된 값들을 인자로 전달하는 것')
function fn(x, y, z) {
  console.log(x, y, z)
}

fn (1, 2, 3)

const k = [1, 2, 3]
fn(k[0], k[1], k[2])    // 1 2 3
fn(...k)    // 1 2 3
