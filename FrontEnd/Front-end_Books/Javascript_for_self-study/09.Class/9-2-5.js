/* 길이에 음수가 들어가지 않게 수정하기 */

class Square {
  constructor (length) {
    if (length < 0) {
      throw '길이는 양수여야 합니다.'
    }
    this.length = length
  }

  /**
   * getPerimeter. 둘레를 구하는 함수
   */
  getPerimeter() {
    return 4 * this.length
  }

  /**
   * getArea. 넓이를 구하는 함수
   */
  getArea() {
    return this.length * this.length
  }
}

const square = new Square(-10)
console.log("둘레 : " + square.getPerimeter());
console.log("넓이 : " + square.getArea());
