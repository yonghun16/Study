/* Generic_two */
// 제네릭은 타입을 함수의 매개변수처럼 동적으로 받을 수 있게 해줍니다.


/* 타입의 정의 */
console.log()
console.log("== 타입의 정의 ==")

//type SuperPrint = <T>(a: T[]) => T
//const superPrint: SuperPrint = (a) => a[0]

//const superPrint = <T>(a: T[]) => a[0];   // 위 두 코드를 한줄로 만듬

function superPrint<T>(a: T[]) {      // 위 코드보다 좀 더 쉬운 형태
  return a[0]
}

console.log(superPrint<number>([1, 2, 3, 4]))
console.log(superPrint([1, 2, 3, 4]))     // <number>는 생략가능(typescript가 자동으로 확인)
console.log(superPrint<boolean>([true, false, true]))



/* 타입의 확장 */
console.log()
console.log("== 타입의 확장 ==")


type Player<E> = {
  name: string
  extraInfo: E    // extraInfo를 다양한 타입으로 받기 위해 제네릭 사용
}

type NicoExtra = {
  favFood: string
}

type NicoPlayer = Player<NicoExtra>  // type NicoPlayer = Player<{favFood: string}>

const nico: NicoPlayer = {   // const nico: Player<NicoExtra> = {
  name: "nico",
  extraInfo: {
    favFood: "kimchi"
  }
}

console.log(nico.name)                 // nico
console.log(nico.extraInfo.favFood)    // kimchi

const lynn: Player<null> = {
  name: "lynn",
  extraInfo: null
}

console.log(lynn.name)          // lynn
console.log(lynn.extraInfo)     // null
