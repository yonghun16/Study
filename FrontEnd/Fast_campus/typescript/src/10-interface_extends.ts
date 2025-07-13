// 인터페이스(Interface)
// 확장(상속)

interface UserA10 {
  name: string
  age: number
}

interface UserB10 extends UserA10 {
  isValid: boolean                      // userB10 클래스는 userA10 클래스로부터 isvalid 속성을 확장
}

const heropy10: UserA10 = {
  name: 'Heropy',
  age: 85,
  // isValid: true                // UserA10은 isValid 속성이 없어서 에러
}

const neo10: UserB10 = {     // userB10은 userA10 클래스로부터 확장되어 isValid 속성이 있음
  name: 'Neo',
  age: 102,
  isValid: true
}




// 인터페이스는 같은이름으로 선언이 가능핟. 
interface FullName10 {
  firstName: string
  lastName: string
}

interface FullName10 {
  middleName: string      // middleName이 확장됨.
  // lastName: boolean
}

const fullName10: FullName10 = {
  firstName: 'Neo',
  lastName: 'Neo',
  middleName: 'Neo'
}

console.log(fullName10)
