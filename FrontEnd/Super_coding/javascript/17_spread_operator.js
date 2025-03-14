// spread operator

/*-----------------------------------------------------
 * 이터러블 객체
   - Array, string, Map, set
-----------------------------------------------------*/

const restaurant = {
  name: 'Super Pizza',
  location: 'Rome, Italy',
  startMenus: ['Focaccia', 'Bruschetta', 'Garlic Bread'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.startMenus[starterIndex], this.mainMenu[mainIndex]]
  },

  opening: {
    mon: {
      open: 11,
      close: 22
    },
    tue: {
      open: 10,
      close: 23
    },
    sat: {
      open: 12,
      close: 20
    }
  },

  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(`주문 접수 ${this.startMenus[starterIndex]} 와 ${this.mainMenu[mainIndex]}. ${time}시간에 맞춰서 ${address}로 도착 예정`)
  }
}


// 1.
console.log('\n--- 1.');
const str = 'str1';
const array = ['a', 'b', 'c'];
console.log([...str]);              // ['s', 't', 'r', '1']
console.log(...str);                // s t r
console.log([...array]);            // ['a', 'b', 'c']
console.log(...array);              // a b c

// 2.
console.log('\n--- 2.');
const [a, b, ...others] = [1,2,3,4,5];
console.log(a, b, others);          // 1 2 [3,4,5]

const [pizza, ,risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.startMenus]
//                                        Super Pizza, Pizza, Risotto,   Focaccia, Bruschetta, Garlic Bread
console.log(otherFoods);            // ['Focaccia', 'Bruschetta', 'Garlic Bread']

const {sat, ...weekdays} = restaurant.opening;   // sat, mon, tue 중 sat 제외한 나머지를 weekdays에 넣기
console.log(weekdays);

// 3. function
console.log('\n--- 3.');
const add = function (...numbers) {
  // console.log(numbers);
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) sum += numbers[i];
  return sum;
};

console.log(add(2, 3));
console.log(add(2, 3, 4, 5));
console.log(add(9, 9, 9, 9, 9, 4, 6));

