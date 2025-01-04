/* readonly */
console.log();
console.log("* readonly *");

type Age = number;
type Name = string;

type Player = {
  readonly name: Name,   // 읽기전용 속성
  age?: Age
}

const playerMaker = (name:string) : Player => ({name})

const nico = playerMaker("nico")
nico.age = 12;
// nico.name = "las";   // readonly에 의한 error

const names: readonly string[] = ["1", "2"]
// names.push("hello")  // readonly에 의한 error



/* Tuple */
console.log();
console.log("* Tuple *");

const player: readonly [string, number, boolean] = ["name", 34, true]

//player[0] = "hi";  // readonly에 의한 error
console.log(player[0]);



/* any */
console.log();
console.log("* any *");

const a : any[] = [1, 2, 3, 4];
const b : any = true

console.log(a+b);
