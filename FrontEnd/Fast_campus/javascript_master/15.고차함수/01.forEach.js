// 1. 일반 배열
const fruits = ['apple', 'banana', 'orange'];


fruits.forEach((fruit, i)=>{
  console.log(fruit)
  console.log(i)
})


// 2. 객체 배열
const users = [
  { name: 'Neo', age: 85 },
  { name: 'Amy', age: 22 }
];

users.forEach(user => {
  console.log(`${user.name}의 나이는 ${user.age}세입니다.`);
});


// 3. 종료

[1, 2, 3].forEach(num => {
  if (num === 2) return; // 전체 종료 X, 그냥 그 요소만 건너뜀
  console.log(num);
});
