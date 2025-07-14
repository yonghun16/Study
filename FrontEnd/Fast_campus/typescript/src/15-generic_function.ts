// 제네릭(Generic)
// 함수


// 1) 제네릭 사용 전
interface Obj {
  x: number
}

type Arr = [number, number]    // 튜플

// 함수 오버로딩  => 필요한 타입마다 오버로딩을 통하여 추가해 줘야 한다 -> 불편함 -> 제네릭을 통해 해결 가능
function toArray15(a: string, b: string): string[]
function toArray15(a: number, b: number): number[]
function toArray15(a: Obj, b: Obj): Obj[]
function toArray15(a: Arr, b: Arr): Arr[]
function toArray15(a: any, b: any) {
  return [a, b]
}

console.log(
  toArray15('Neo', 'Anderson'),
  toArray15(1, 2),
  toArray15({ x: 1 }, { x: 2 }),
  toArray15([1, 2], [3, 4])
)



// 2) 제네릭 사용 후
// 제네릭은 첫 번째 들어오는 인수로 타입추론을 함.
function toArray15_1<T>(a: T, b: T) {           // 제네릭으로 T를 사용함. (저 T의 약자는 아무레도 Type의 T가 아닐까...?)
  return [a, b]
}

console.log(
  // toArray15_1('Neo', 123445),                // error : 첫번째 파라메터 T에 먼저 string이 들어왔으므로, 두번째 파라메터 T에도 string이 되어야 함.
  toArray15_1<string>('Neo', 'and'),            // 제네릭 T를 명시적으로 선언도 가능

  // toArray15_1(1, "2"),                       // error: 이번엔 반대로 첫번째 파라메터 T에 number이 들어왔으므로, 두번째 파라메터 T에도 number가 들어옴.
  toArray15_1({ x: 1 }, { x: 2 }),
  toArray15_1([1, 2], [3, 4, 5]),               // number[]
  // toArray15_1<Arr>([1, 2], [3, 4, 5])        // Arr[] 튜플 타입으로 타입추론 -> 따라서 두번째 인자는 에러
)
