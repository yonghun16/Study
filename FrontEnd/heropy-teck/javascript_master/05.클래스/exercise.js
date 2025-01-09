// 연습

class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0
    this.accel = acceleration
  }
}


class Bicycle extends Vehicle {
  constructor(price = 100, acceleration) {
    super(acceleration)
    this.price = price
    this.wheel = 2
  }
}


const car1 = new Bicycle(200, 54)
console.log(car1.speed)
console.log(car1.accel)
console.log(car1.price)
console.log(car1.wheel)

