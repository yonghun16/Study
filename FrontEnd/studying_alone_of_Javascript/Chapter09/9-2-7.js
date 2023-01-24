/* private 속성 사용하기 */

// 사각형 클래스
class Square {
  #length                     // length를 private로 선언

  constructor (length) {
    if (length < 0) {
      throw '길이는 양수여야 합니다.'
    }
    this.#length = length
  }

  /**
   * getPerimeter. 둘레를 구하는 함수
   */
  getPerimeter() {
    return 4 * this.#length
  }

  /**
   * getArea. 넓이를 구하는 함수
   */
  getArea() {
    return this.#length * this.#length
  }
}

const square = new Square(10)
square.#length = -10      // 에러를 뱉어냄

console.log("둘레 : " + square.getPerimeter());
console.log("넓이 : " + square.getArea());

