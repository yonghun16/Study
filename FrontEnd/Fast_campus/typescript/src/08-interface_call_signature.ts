// 인터페이스(interface)
// 함수 타입 - 호출 시그니처(Call Signature)

interface GetName {             // 함수 타입을 인터페이스로 구현하면 재사용이 가능하다.
  (message: string): string
}

interface User8 {
  name: string
  age: number
  // getName: (message: string) => string     // 속성에 함수를 선언 -> 재사용 불가
  getName: GetName                            // 콜 시그니처 -> 재사용 가능
}

const heropy8: User8 = {
  name: 'Heropy',
  age: 54,
  getName(message: string) {
    console.log(message)
    return this.name
  }
}

heropy8.getName('Hello~')
