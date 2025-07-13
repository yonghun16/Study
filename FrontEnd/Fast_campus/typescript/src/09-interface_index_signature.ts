// 인터페이스(interface)
// 인덱스 기능 타입 - 인덱스 시그니처(index signature)

// 배열
interface Fruits9 {
  [item: number]: string
}

type Fruits91 = {
  [item: number]: string
}

const fruits9: Fruits9 = ['Apple', 'Banana', 'Cherry']
const fruits91: Fruits91 = ['Apple', 'Banana', 'Cherry']
console.log(fruits9[1])
console.log(fruits91[1])


// 객체
interface User9 {
  [key: string]: unknown
  name: string
  age: number
}

const heropy9: User9 = {
  name: 'Heropy',
  age: 85
}

heropy9['isValid'] = true
heropy9['emails'] = ['thescon@gmail.com', 'test@gmail.com']
console.log(heropy9)
