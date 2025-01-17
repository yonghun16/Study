/*--------------------------------------
         Challenge - Generics

 * 아래의 함수를 구현하시오
--------------------------------------*/

// last(arr): 이 함수는 배열의 마지막 요소를 반환해야 합니다.
console.log()
console.log("== last(arr) ==")
type Last = {
  (arr: number[]): void
  (arr: string[]): void
  (arr: boolean[]): void
}
const last: Last = (arr: any) => arr[arr.length - 1]

console.log(last([1, 2, 3, 4, 5]))



// prepend(arr, item): 이 함수는 배열의 시작 부분에 item을 넣고 배열을 return해야 합니다.
console.log()
console.log("== prepend(arr, item) ==")
type Prepend = {
  <T>(arr: T[], item: T): T[]
}
const prepend: Prepend = (arr, item) => [item, ...arr]

console.log(prepend([2, 3, 4, 5], 1))
console.log(prepend(['b', 'c', 'd', 'e'], 'a'))



// mix(arr,arr) : 두개의 배열을 매개변수로 받아, 매개변수로 받은 두 배열을 하나의 배열로 섞어서 하나의 배열로 반환합니다.
console.log()
console.log("== mix(arr,arr) ==")
type Mix = <T>(arr1: T[], arr2: T[]) => T[]

const mix: Mix = (arr1, arr2) => {
  const result: any[] = []
  const maxLength = Math.max(arr1.length, arr2.length)

  for (let i = 0; i < maxLength; i++) {
    if (arr1[i] !== undefined) result.push(arr1[i])
    if (arr2[i] !== undefined) result.push(arr2[i])
  }

  return result
}

const arr1 = [1, 3, 5, 7]
const arr2 = [2, 4, 6]

console.log(mix(arr1, arr2).join(', '))



// count(arr) : 배열을 매개변수로 받아, 매개변수로 받아온 배열의 길이를 반환하면됩니다.
console.log()
console.log("== count(arr) ==")
const count: (<T>(arr: T[]) => number) = (arr) => arr.length

const arr_count = [1, 2, 3, 4, 5]

console.log(count(arr_count))



// findIndex(arr, item) : 첫번째 매개변수로 배열을, 두번째 매개변수로 받아온 item이 첫번째 매개변수 arr배열의 몇번째 index로 존재하는지 체크한후 존재한다면 몇번째 index인지 반환하고 존재하지않는다면 null을 반환합니다.
console.log()
console.log("== findIndex(arr, item) ==")
type FindIndex = <T>(arr: T[], item: T) => number | null 

const findIndex: FindIndex = (arr, item) => {
  const index = arr.indexOf(item)
  return index !== -1 ? index : null
}

const arr_findindex = [10, 20, 30, 40, "a"]

console.log(findIndex(arr_findindex, 'a'))
console.log(findIndex(arr_findindex, 100))



// slice(arr, startIndex, endIndex): 첫번째 매개변수로 배열 arr을 받고, 두번째 매개변수로 숫자 startIndex, 세번째 매개변수 숫자 endIndex를 받습니다. 첫번째 매개변수 arr을 두번째 매개변수로 받은 startIndex부터 세번째 매개변수로 받은 인덱스까지 자른 결과를 반환하면됩니다. 이때 세번째 매개변수는 필수 매개변수가 아닙니다.
console.log()
console.log("== slice(arr, startIndex, endIndex) ==")
type Slice = {
  <T>(arr: T[], startIndex: number, endIndex?: number): T[]
}
const slice: Slice = (arr, startIndex, endIndex) => {
  return arr.slice(startIndex, endIndex)
}

const arr_slice = [10, 20, 30, 40, 50]

console.log(slice(arr_slice, 2))
console.log(slice(arr_slice, 1, 4))
