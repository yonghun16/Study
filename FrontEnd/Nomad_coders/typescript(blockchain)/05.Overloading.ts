/* Overloading */
// 오버로딩은 여러 call signatures가 있는 함수

// ex1)
console.log();
console.log("== Overloading ==");
console.log("-- ex1) --");

type Add = {
  (a: number, b: number): number    // a를 숫자, b를 숫자를 함수의 인자로 받아 : 숫자를 반환
  (a: number, b: string): number
}

const add: Add = (a, b) => {
  if (typeof b === "string") return a

  return a + b
}

console.log(add(1, '2'))


// ex2)
console.log();
console.log("-- ex2) --");

type Config = {
  path: string,
  state: object
}

type Push = {
  (path: string): void
  (config: Config): void
}

const push: Push = (Config) => {
  if (typeof Config === "string") {
    console.log(Config)
  } else {
    console.log(Config.path)
  }
}

push(
  {
    path: '/dev/',
    state: {
      name: '1',
      age: 2
    }
  }
);



console.log();
console.log("-- ex3) --");

type Add2 = {
  (a: number, b: number): number
  (a: number, b: number, c: number): number
}

const add2: Add2 = (a, b, c?: number) => {
  if (c) return a + b + c
  return a + b
}

console.log(add2(1, 2))
console.log(add2(1, 2, 3))
