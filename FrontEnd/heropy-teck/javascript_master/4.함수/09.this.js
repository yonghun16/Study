/* this */
//// '일반 함수'의 this는 호출 위치에서 정의
//// '화살표 함수'의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의

function user() {
  this.firstName = 'Neo'
  this.lastName = 'Anderson'

  return {
    firstName: 'Heropy',
    lastName: 'Park',
    age: 85,
    // getFullName: () => {
    //   return `${this.firstName} ${this.lastName}`    // Neo Anderson
    // }
    getFullName: function () {                       // getFullName() {   // 축약이 가능
      return `${this.firstName} ${this.lastName}`    // Heorpy Park
    }
  }
}

const lewis = {
  firstName: 'Lewis',
  lastName: 'Yang'
}

const u = user()
console.log(u.getFullName())
console.log(u.getFullName.call(lewis))




const timer = {
  title: 'TIMER!',
  timeout() {
    console.log(this.title)
    setTimeout(()=> {
      console.log(this.title)
    }, 1000)
  }
}
timer.timeout()
