// 타입 종류

/* any */
let hello3: any = 'Hello world'
hello3 = 123
hello3 = false
hello3 = null
hello3 = undefined
hello3 = {}
hello3 = []
hello3 = () => {}


/* unknown */
const a3: any = 123         // 일단 모든 자료형 허용 (모든 자료형으로 확정)
const u3: unknown = 123     // 일단 모든 자료형 허용 (아직 확정되지 않은 자료형)

// type <- anytype : 에러가 전혀 발생하지 않음.
const any3: any = a3
const boo3: boolean = a3
const num3: number = a3
const arr3: string[] = a3
const obj3: { x: string, y: number } = a3

// type <- unknown : 확정하지 않은 자료형을 사용시 에러를 발생시킴
const any3u: any = u3
// const boo3u: boolean = u3
// const num3u: number = u3
// const arr3u: string[] = u3
// const obj3u: { x: string, y: number } = u3


/* Tuple */
const tuple3: [string, number, boolean] = ['a', 1, false];
const users3: [string, number][] = [['a', 1], ['b', 2], ['c', 3]];     // [] -> 배열임을 의미 (Array<...>와 같음)
console.log(tuple3)


/* void */
function hellow3(msg: string): void {    // 아무것도 반환하지 않을 때는 void
  console.log(`Hello ${msg}`)
}
const hi: void = hellow3('world')

/* never */



/* union */



/* intersection */
