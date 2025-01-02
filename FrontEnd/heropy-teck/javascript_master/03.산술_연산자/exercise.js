// 6 구조분해 할당



const obj = {
  x: 101,
  y: 202,
  z: 303
}

const {x, y: y2, z: z3=100} = obj
console.log(x, y2, z3)
