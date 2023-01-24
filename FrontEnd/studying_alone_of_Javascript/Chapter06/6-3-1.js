/* 속성 존재 여부 확인하기 */

// 객체를 생성합니다.
const object = {
  name: '혼자 공부하는 파이썬',
  price: 18000,
  publisher: '한빛미디어'
}

//객체 내부에 속성이 있는지 확인합니다.
if(object.name !== undefined) {
  console.log('name 속성이 있습니다.');
} else {
  console.log('name 속성이 없습니다.');
}

if(object.author !== undefined) {
  console.log('author 속성이 있습니다.');
} else {
  console.log('author 속성이 없습니다.');
}
