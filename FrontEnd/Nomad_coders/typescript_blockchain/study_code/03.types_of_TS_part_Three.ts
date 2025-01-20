/* unknown */
// unknown은 모든 값을 가질 수 있는 타입으로, 타입 안전성을 강화한 any 타입이라고 볼 수 있습니다. unknown 타입의 변수는 어떤 값도 할당할 수 있지만, 이를 사용하려면 반드시 타입을 좁히거나 타입 검사를 거쳐야 합니다.
console.log();
console.log("== unknown ==");

let a: unknown;   // a의 타입(자료형)을 아직 알지 못할 때 우선 임시로 쓸 수 있는 자료형
a = 'A'

function processInput(input: unknown): void {
  if (typeof input === "string") {
    console.log("It's a string:", input.toUpperCase());
  } else if (typeof input === "number") {
    console.log("It's a number:", input + 10);
  } else {
    console.log("Unknown type:", input);
  }
}

processInput("hello");
processInput(42);
processInput(true);



/* void */
// void는 함수가 작업을 완료하고 반환할 필요가 없음을 나타냅니다
console.log();
console.log("== void ==");

function hello(): void {
  console.log("hello");
}
hello()



/* never */
// never는 함수가 반환하지 않는다는 것을 나타냅니다
// never는 반환 값이 없는 것이 아니라, 함수가 반환되지 않는다는 것을 나타내는 반환 유형입니다.
// 리턴되면 에러를 발생시키는 함수를 만들기 위에 사용되기도 하는 타입이다.
console.log();
console.log("== never ==");

function error(message: string): never {
  throw new Error(message);
}
