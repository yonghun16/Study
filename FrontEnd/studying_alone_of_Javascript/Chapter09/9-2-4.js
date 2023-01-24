/* 사용자가 음수 길이를 입력한 경우 */

class Square {
  constructor (length) {
    this.length = length
  }

  /**
   * getPerimeter. 둘레를 구하는 함수
   */
  getPerimeter() {
    return 4 * this.length
  }

  getArea() {
    return this.length * this.length
  }
}

const square = new Square(10)
console.log("둘레 : " + square.getPerimeter());
console.log("넓이 : " + square.getArea());
