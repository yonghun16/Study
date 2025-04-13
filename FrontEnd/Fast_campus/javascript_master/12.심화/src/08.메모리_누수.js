// 메모리 누수(Memory Leak)

// 더 이상 필요하지 앟ㄴ은 데이터가 해제되지 못하고 메모리를 계속 차지되는 현상


// 1. 불필요한 전역 변수 사용
window.hello = 'hello world!'     // 사용하지 않은 변수
window.heropy = { name: 'Heropy', age: 85 }



// 2. 분리된 노드 참조
const btn = document.querySelector('button')
const parent = document.querySelector('.parent')

btn.addEventListener('click', () => {
  console.log(parent);    // 버튼 클릭시 계속 출력됨
  parent.remove()         // 요소는 제거했지만, 요소가 가지고 있는 메모리의 주소는 실제로 제거되지 않음.
})

// -> 해결 방법
const btn2 = document.querySelector('button')

btn.addEventListener('click', () => {
  const parent2 = document.querySelector('.parent')  // 요소가 삭제되어 null 이 parent2에 참조됨.
  console.log(parent2);
  parent2 && parent2.remove()    // parent2가 없으면 parent2.remove()를 실행하지 않음.
})



// 3. 해제하지 않은 타이머
let a = 0;
setInterval(() => {
  a += 1  // 0.1초마다 증가
}, 100)

setTimeout(() => {
  console.log(a)
}, 1000)  // 1초 후 증가한 a를 출력
          // setInterval()은 계속 실행되고 있음.

// -> 해결 방법
let b = 0;
const itervalId = setInterval(() => {
  b += 1  // 0.1초마다 증가
}, 100)

setTimeout(() => {
  console.log(b)
  clearInterval(itervalId)   // setInterval()를 해제
}, 1000)  // 1초 후 증가한 b를 출력



// 4. 잘못된 클로저 사용
const getFn = () => {
  let a = 0
  return name => {
    a += 1            // 사용하지 않은 코드
    console.log(a)    // 사용하지 않은 코드
    return `hello ${name}~`
  }
}

const fn = getFn()
console.log(fn('Heropy'))  // 1, Hello Heropy~
console.log(fn('Lee'))     // 2, Hello Lee~
console.log(fn('LeWis'))   // 3, Hello LeWis~

// -> 해결 방법
const getFn2 = () => {
  let a = 0
  return name => {
    return `hello ${name}~`
  }
}

const fn2 = getFn2()
console.log(fn2('Heropy'))  // Hello Heropy~
console.log(fn2('Lee'))     // Hello Lee~
console.log(fn2('LeWis'))   // Hello LeWis~
