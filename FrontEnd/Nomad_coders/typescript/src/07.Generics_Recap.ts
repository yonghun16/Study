/* Generics */
// Typescript는 영리해서 placeholder를 호출하는 소스에서 발견하는 타입으로 대체한다.
// 대체되는 타입이 존재하기에 type에 따른 call signature를 만들어준다.
// any는 call signature를 만들어주지 않는다 -> 에러를 검정하지 않는다.

type SuperPrint = <placeholder>(a: placeholder[]) => placeholder

const superPrint: SuperPrint = (a) => a[0]

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1, 2, true, false, "hello"])
//d.toUpperCase()      // any를 사용했다면 type에 대한 call signature를 생성하지 않아 에러가 발생되지 않는다.


// 제네릭 추가
type SuperPrint2 = <T, M>(a: T[], b: M[]) => T

const superPrint2: SuperPrint2 = (a, b) => a[0];

const e = superPrint2([1, 2, 3], [4, 5]);
console.log(e); // [1, 2, 3, 4, 5]
