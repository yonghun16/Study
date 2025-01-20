/* Generics */
// Typescript는 영리해서 placeholder를 호출하는 소스에서 발견하는 타입으로 대체한다.
// 대체되는 타입이 존재하기에 type에 따른 call signature를 만들어준다.
// any는 'call signature'를 만들어주지 않는다 -> 에러를 검정하지 않는다.



/* 제네릭 사용 안했을 때 */
console.log()
console.log("== 제네릭 사용 안했을 때 ==")
type SuperPrintType1 = {
  // 미리 작성한 call signature
  (arr: number[]): void
  (arr: boolean[]): void
  (arr: string[]): void
  (arr: (number | boolean | string)[]): void
}

const superPrint1: SuperPrintType1 = (arr: any) => arr

console.log(superPrint1([1, 2, 3, 4]))
console.log(superPrint1([true, false, true]))
console.log(superPrint1(["a", "b", "c"]))
console.log(superPrint1([1, 2, true, false, "hello"]))



/* 제네릭 사용 */
console.log()
console.log("== 제네릭 사용 ==")
type SuperPrintType2 = <T>(parameter: T[]) => T[]

const superPrint2: SuperPrintType2 = (a) => a

console.log(superPrint2([1, 2, 3, 4]))
console.log(superPrint2([true, false, true]))
console.log(superPrint2(["a", "b", "c"]))
console.log(superPrint2([1, 2, true, false, "hello"]))
//d.toUpperCase()      // any를 사용했다면 type에 대한 call signature를 생성하지 않아 에러가 발생되지 않는다.



/* 제네릭 추가 */
console.log();
console.log("== 제네릭 추가 ==");

type SuperPrintType3 = <T, M>(a: T[], b: M[]) => (T | M)[];

const superPrint3: SuperPrintType3 = (a, b) => [...a, ...b];

const e = superPrint3([1, 2, 3], [4, 5]);
console.log(e); // [1, 2, 3, 4, 5]
