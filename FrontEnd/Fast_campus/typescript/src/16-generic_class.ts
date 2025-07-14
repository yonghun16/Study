// 제네릭(Generic)
// 클래스

class User16<P> {
  constructor(public payload: P) {}
  getPayload() {
    return this.payload
  }
}

interface UserAType16 {
  name: string
  age: number
  isValid: boolean
}

interface UserBType16 {
  name: string
  age: number
  emails: string[]
}


const heropy16 = new User16<UserAType16>({  // 클래스에 인터페이스로 선언한 타입을 제네릭으로 적용
  name: 'Heropy',
  age: 85,
  isValid: true,
  // emails: []     // 1. Object literal may only specify known properties, and 'emails' does not exist in type 'UserAType16'. [2353]
})

const neo16 = new User16<UserBType16>({
  name: 'Neo',
  age: 102,
  emails: ['neo16@gmail.com']
})
