// 사각형을 구하는 클래스
class Rectangle {
  constructor (width, height) {
    this.width = width
    this.height = height
  }

  // 사각형의 둘레를 구하는 메서드
  getPerimetr() {
    return 2 * (this.width + this.height)
  }

  //사각형의 넓이를 구하는 메서드
  getArea() {
    return this.width * this.height
  }
}

// 정사각형을 구하는 클래스
class Square {
  constructor (length) {
    this.length = length
  }

  // 정사각형의 둘레를 구하는 메서드
  getPerimetr() {
    return 4 * this.length
  }

  //정사각형의 넓이를 구하는 메서드
  getArea() {
    return this.length * this.length
  }
}


const ractangle = new Rectangle(10, 20)
console.log(`사각형의 둘레: ${ractangle.getPerimetr()}`);
console.log("사각형의 넓이: " + ractangle.getArea());

const square = new Square(10)
console.log(`정사각형의 둘레: ${square.getPerimetr()}`);
console.log("정사각형의 넓이: " + square.getArea());
