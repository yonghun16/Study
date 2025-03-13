// call, apply, bind

/*-----------------------------------------------------
 * 차이점
   - call  : this 설정 후 함수 실행, 즉시 실행
   - apply : this 설정 후 함수 실행(배열 전달), 즉시 실행
   - bind  : this 설정된 새로운 함수 반환, 나중에 실행

 * 언제 사용하면 좋을까?
   - call  : 특정 객체를 this로 설정하고 함수를 즉시 실행할 때
   - apply : 함수에 배열을 인자로 전달해야 할 때
   - bind  : 특정 this 값으로 고정된 함수를 미리 만들고 나중에 실행하고 싶을 때
-----------------------------------------------------*/

// 1.
console.log("--- 1. ")
const koreanAir = {
  airline: 'KoreanAir',
  iataCode: 'KAL',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name}이 ${this.airline} 항공의 ${this.iataCode}${flightNum}를 예약`);
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`, 
      name
    });
  }
}
koreanAir.book(123, 'Park');
koreanAir.book(456, 'Jang');



// 2. call()
//	-	함수를 즉시 실행하면서 this를 설정할 수 있음.
// 	-	첫 번째 인자로 this로 사용할 객체를 넘기고, 이후 인자로 함수의 매개변수를 개별적으로 전달.
console.log("--- 2. ")

// 2-1.
const asiana = {
  airline: 'Asiana',
  iataCode: 'ASA',
  bookings: [],
  // 여기에 book 메서드를 어떻게 중복 코드 없이 추가?
};
const book = koreanAir.book;          // '함수'를 새로 생성
//book(23, 'Song');                   // error : 여기서 book은 golbal scope의 book함수다.
book.call(koreanAir, 23, 'Song');     // koreanAir.book(23, 'Song')과 같은 과정 
book.call(asiana, 36, 'Kim');         // asiana.book(36, 'Kim')과 같은 과정
console.log(asiana.bookings);

// 2-2
function greet(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}
const person = { name: "Alice" };     // '객체'를 새로 생성
greet.call(person, "Hello", "!");     // persong.greet("Hello", "!")과 같은 과정



// 3. apply()
//  -	call()과 동일한 역할을 하지만, 인자를 배열 형태로 전달해야 함.
//  -	apply(thisArg, [arg1, arg2, ...]) 형태를 가짐.
console.log("--- 3. ")

const flightData = [222, 'George'];
book.apply(asiana, flightData);
console.log(asiana.bookings);
// book.call(koreanAir, ...flightData);     // 정확히 동일



// 4. bind()
//	- 즉시 실행하지 않고, this가 고정된 새로운 함수를 반환.
//  - 이후에 실행하고 싶을 때 사용할 수 있음.
// 	-	call과 마찬가지로 첫 번째 인자로 this로 사용할 객체를 넘기고, 이후 인자로 함수의 매개변수를 개별적으로 전달.
console.log("--- 4. ")

// 4-1.
const bookASA = book.bind(asiana);          // book(flightNum, name) { }
bookASA(66, 'Rebecca');

const bookASA55 = book.bind(asiana, 55);
bookASA55('Micheal');
