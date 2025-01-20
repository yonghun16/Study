/* 재귀 (Recursive) */

userA = { name: 'A', parent: null }
userB = { name: 'B', parent: userA }
userC = { name: 'C', parent: userB }
userD = { name: 'D', parent: userC }

const printUser = user => {
  if (user.parent) {
    return printUser(user.parent)
  }
  return user.name
}

console.log(printUser(userD))
