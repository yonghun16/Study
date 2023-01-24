/* 게터(getter)과 세터(setter) 메서드 */

// 정사각형 클래스
class Square {
  #length
  
  constructor (length) {
    this.setLength(length)
  }

  setLength(value) {
    if (value < 0) {
      throw 'length는 양수여야 합니다.'
    }
    this.#length = value
  }

  getLength(value) {
    return this.#length
  }

  getPerimeter() {
    return 4 * this.#length
  }

  getArea() {
    return this.#length * this.#length
  }
}

//클래스 사용하기
const square = new Square(10)
console.log("둘레 : " + square.getPerimeter());
console.log("넓이 : " + square.getArea());

//예외 발생시키기
square.setLength(-100)
