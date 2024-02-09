import _ from 'lodash'

console.log(_.upperCase('hello-world'))


interface User {
  name: string
  age: number
}

const user: User = {
  name: 'John',
  age: 30
}

console.log(user)
