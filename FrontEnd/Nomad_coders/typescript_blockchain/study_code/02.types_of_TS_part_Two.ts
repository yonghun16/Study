/* readonly */
console.log();
console.log("== readonly ==");

type Age = number;
type Name = string;
type Player = {
  readonly name: Name,   // 읽기전용 속성
  age?: Age
}

const playerMaker = (name: string): Player => ({ name })

const nico = playerMaker("nico")
console.log(nico.name)
console.log(nico.age = 12)
// nico.name = "las";    // readonly에 의한 error

const names: readonly string[] = ["1", "2"]
// names.push("hello")   // readonly에 의한 error



/* Tuple */
// Tuple은 배열의 특수한 형태로, 요소의 수와 타입이 고정된 데이터를 표현하는 데 사용됩니다. 각 요소는 지정된 타입에 따라 정의되며, 요소의 순서도 중요합니다. 이를 통해 정해진 구조를 가진 데이터를 보다 안전하게 다룰 수 있습니다.
console.log();
console.log("== Tuple ==");

const player: readonly [string, number, boolean] = ["name", 34, true]

//player[0] = "hi";      // readonly에 의한 error
console.log(player[0]);  // name



/* any */
// any는 모든 타입을 나타낼 수 있는 타입입니다. 말 그대로, 어떠한 값이든 허용되며, 컴파일러가 해당 값에 대해 타입 검사를 하지 않게 만듭니다. any는 TypeScript의 타입 시스템에서 타입 안전성을 일시적으로 해제하거나 알 수 없는 값의 타입을 나타낼 때 사용됩니다.
console.log();
console.log("== any ==");

const a: any[] = [1, 2, 3, 4];
const b: any = true

console.log(a + b);  // 1,2,3,4true

