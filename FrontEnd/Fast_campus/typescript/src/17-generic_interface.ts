// 제네릭(Generic)
// 인터페이스, 제약 조건(Constraints)

interface MyData<T extends number | string> {    //  제네릭으로 제약 조건을 적용 -> 숫자와 문자열만 허용
  name: string;
  value: T
}

const dataA17: MyData<string> = {
  name: 'Data A',
  value: 'Hello world'
}

const dataB17: MyData<number> = {
  name: 'Data B',
  value: 123
}

const dataC17: MyData<boolean> = {
  name: 'Data C',
  value: true
}

const dataD17: MyData<number[]> = {
  name: 'Data D',
  value: [1, 2, 3, 4]
}
