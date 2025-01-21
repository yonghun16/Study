/* this */
//// 일반 함수의 this는 '호출 위치'에서 정의
//// 화살표 함수의 this는 자신이 '선언된 함수(렉시컬) 범위'에서 정의

function user() {
  this.firstName = 'Neo'        // 화살표 함수의 this
  this.lastName = 'Anderson'    // 화살표 함수의 this

  return {
    firstName: 'Heropy',        // 일반 함수의 this
    lastName: 'Park',           // 일반 함수의 this
    age: 85,
    getFullName() {             // getFullName: function() 와 같음
      return `${this.firstName} ${this.lastName}`    // Heorpy Park
    },
    getFullName_arrowFunction: () => {
      return `${this.firstName} ${this.lastName}`    // Neo Anderson
    }
  }
}

const u = user()
const lewis = {
  firstName: 'Lewis',
  lastName: 'Yang'
}

console.log(u.getFullName())               // u라는 객체 데이터(리턴되는 객체)참조
console.log(u.getFullName_arrowFunction()) // 화살표 함수 안의 this는 ==> this 키워드를 감싸는 화살표함수가 포함된 함수범위의 this를 의미
console.log(u.getFullName.call(lewis))     // lewis라는 객체 데이터(리턴되는 객체) 참조
                                           // :call함수 메소드와 같이 사용하여 다른 객체를 참조함 
console.log(u.getFullName_arrowFunction.call(lewis)) // this 키워드를 감싸는 화살표함수가 포함된 함수범위의 this를 의미



const timer = {
  title: 'TIMER!',
  timeout() {
    console.log(this.title)
    setTimeout(()=> {
      console.log(this.title)
    }, 1000)
  }
}

timer.timeout()  // timeout() 함수: 참조된 객체(timer)의 title 호출
                 // 화살표 함수 내에서 this.title를 참조하므로 timer 맴버인 title를 출력
