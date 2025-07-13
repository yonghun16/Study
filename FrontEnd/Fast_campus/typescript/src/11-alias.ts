// 타입 별칭(alias)

// 예제 1
type TypeA_11 = string

type TypeB_11 = string | number | boolean

type User_11 = {                  // 객체 타입
  name: string
  age: number
  isValid: boolean
} | [string, number, boolean]     // 또는 튜플 타입



const userA_11: User = {
  name: 'Neo',
  age: 85,
  isValid: true
}

const userB_11: User_11 = ['Neo', 85, true]


function someFunc(param: TypeB_11): TypeA_11 {   // TypeA_11는 someFunc가 반환하는 타입.
  switch (typeof param) {
    case 'string':
      return param.toUpperCase()
    case 'number':
      return param.toFixed(2)
    case 'boolean':
      return true.toString()                    // someFunc의-return 타입은 string
    default:
      return ''
  }
}



// 예제 2
type TypeUser = {
  name: string
  age: number
  isValid: boolean
}

interface InterfaceUser {
  name: string
  age: number
  isValid: boolean
}


const heopy_11: ?? = {
  name: 'Neo',
  age: 85,
  isValid: true
}
