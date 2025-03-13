// Destructuring Assignment

/*-----------------------------------------------------
 * 배열이나 객체에서 값을 추출하여 변수에 간단히 할당하는 JavaScript 문법
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
console.log('--- 1.');
const arr = [1, 2, 3];    // arr <- arr
const [x, y, z] = arr;
console.log(x, y, z);


// 2.
console.log('--- 2.');
const [first, ,third] = restaurant.startMenus;   // arr <- arr
console.log(first, third);

// 3.
console.log('--- 3.');
console.log(restaurant.order(1, 2));
const [starter, mainCourse] = restaurant.order(1, 2);     // arr <- arr
console.log(starter, mainCourse);

// 4.
console.log('--- 4.');
const nested = [2, 4, [5, 6]];
const [i, ,j] = nested;           // 2 [ 5, 6 ]
const [o, , [p, q]] = nested;     // 2, 5, 6
console.log(i, j);
console.log(o, p, q);

// 5.
console.log('--- 5.');
const { name, opening } = restaurant;                             // obj <- obj  // 동일한 프로퍼티명을 받아야함.
console.log(name);
console.log(opening);

const { name: restaurantName, opening: hours } = restaurant;      // obj <- obj    // 다른 프로퍼티명으로 받을 수도 있음.
console.log(restaurantName);
console.log(hours);

// 6.
console.log('--- 6.');
const { mon: {open, close} } = hours
console.log(open, close);

// 7.
console.log('--- 7.');
restaurant.orderDelivery({                          // ojb -> obj
  starterIndex: 1,
  mainIndex: 2,
  time: '14:00',
  address: 'Seoul, South Korea'
});
