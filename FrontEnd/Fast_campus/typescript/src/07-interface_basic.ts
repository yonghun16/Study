// 인터페이스(Interface)

// 선택적 속성 - ?
// 읽기전용 속성 - readonly

interface Usertype {        // 인터페이스 속성 정의
  name: string
  readonly age: number      // age는 읽기전용 속성
  isValid?: boolean         // isValid는 이제 없어도 되고 있을 수 있음
}

const heropy: Usertype = {    // 속성이 정의된 인터페이스를 타입으로 사용
  name: 'Heropy',
  age: 85,
  isValid: true
}
heropy.isValid = false
// heropy.age = 84             // error TS2540: Cannot assign to 'age' because it is a read-only property.

const neo: Usertype = {
  name: 'Neo',
  age: 22,
  // isValid: false      // isValid가 없어도 error가 생기지 않음
}
