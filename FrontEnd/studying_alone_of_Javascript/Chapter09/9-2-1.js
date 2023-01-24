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

const ractangle = new Rectangle(10, 20)
console.log(`사각형의 둘레: ${ractangle.getPerimetr()}`);
console.log("사각형의 넓이: " + ractangle.getArea());
