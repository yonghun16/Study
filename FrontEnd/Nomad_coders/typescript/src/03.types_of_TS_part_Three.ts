/* unknown */
console.log();
console.log("* unknown *");

let a: unknown;   // a의 타입(자료형)을 아직 알지 못할 때 우선 임시로 쓸 수 있는 자료형
a = 'A'

if (typeof a === 'number'){  // a의 타입이 숫자라면
  let b = a + 1
  console.log (b);
}

if (typeof a === 'string'){  // a의 타입이 문자라면
  let b = a.toUpperCase();
  console.log (b);
}



/* void */
// void는 함수가 작업을 완료하고 반환할 필요가 없음을 나타냅니다
console.log();
console.log("* void *");

function hello(): void {
  console.log("hello");  
} 



/* never */
// never는 함수가 반환하지 않는다는 것을 나타냅니다
// never는 반환 값이 없는 것이 아니라, 함수가 반환되지 않는다는 것을 나타내는 반환 유형입니다.
// 리턴되면 에러를 발생시키는 함수를 만들기 위에 사용되기도 하는 타입이다.
console.log();
console.log("* never *");

function error(message: string): never {
  throw new Error(message);
}
