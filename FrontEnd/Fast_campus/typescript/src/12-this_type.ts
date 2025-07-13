// 함수 - 명시적 this

interface Cat {
  name: string
  age: number
}

const cat: Cat = {
  name: 'Lucy',
  age: 3
}

function hello12(this: Cat, message: string) {     // 명시적 this -> this의 타입을 명시적으로 살펴준다.
  console.log(`Hello ${this.name}, ${message}`)    // this는 호출 위치에서 결정된다.
}
hello12.call(cat, 'You are pretty awesome!')       // 호출 위치에서 cat을 호출함.
