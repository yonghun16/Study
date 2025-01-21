/* 상속(Inheritance) */

// 운송수단
class Vehicle {
  constructor(acceleration = 1) {
    this.speed = 0
    this.acceleration = acceleration
  }
  accelerate() {
    this.speed += this.acceleration
  }
  decelerate() {
    if (this.speed <=0) {
      console.log('정지')
      return
    }
    this.speed -= this.acceleration
  }
}

// 자전거
class Bicycle extends Vehicle {
  constructor(price = 100, accelerationOfBicycle) {
    super(accelerationOfBicycle)  // 부모의 constructor를 그대로 가져옴.
    this.price = price
    this.wheel = 2
  }
}

// 자동차 
class Car extends Bicycle {
  constructor(license, priceOfCar, accelerationOfCar) {
    super(priceOfCar, accelerationOfCar)
    this.license = license
    this.wheel = 4
  }
  // Overriding
  accelerate() {
    if (!this.license) {
      console.error('무면허')
      return
    }
    this.speed += this.acceleration
    console.log('가속!', this.speed)
  }
}

console.log()
console.log('- 자동차 출력')
const CarA = new Car(true, 7000, 10)
const CarB = new Car(false, 4000, 20)
CarA.accelerate()        // 가속! 10
CarA.accelerate()        // 가속! 20
CarB.accelerate()        // 무면허
console.log(CarA.price)  // 7000


/* instanceof */
// 보트
console.log()
console.log('- 보트 출력')
class Boat extends Vehicle {
  constructor(price, accelerationOfBoat) {
    super(accelerationOfBoat)
    this.price = price
    this.motor = 1
  }
}

const boat = new Boat(10000, 5)
console.log(boat)
console.log(boat instanceof Vehicle)   // true
