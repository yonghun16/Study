// For 반복문

const fruits = ['apple', 'banana', 'orange']

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}



// For of 반복문
for (let fruit of fruits) {
  console.log(fruit)
}



// For in 반복문
for (let i in fruits) {
  console.log(i, fruits[i])
}
