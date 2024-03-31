// 상속 ex2
class A {
  constructor() { }
}

class B extends A {
  constructor() {
    super()
  }

}

class C extends B {
  constructor() {
    super()
  }
}

const a = new A()
const b = new B()
const c = new C()

console.log(a instanceof A)
console.log(a instanceof B)
console.log(c instanceof C)

console.log(c.constructor === A)
