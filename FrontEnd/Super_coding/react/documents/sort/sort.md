## 데이터 정렬

> Number 정렬
> String 정렬
> Object 정렬

#### Number 정렬 
- JavaScript의 .sort() 메서드
```jsx
const data = [4, 3, 2, 1];
data.sort(); // [1, 2, 3, 4]

const data2 = [1, 2, 3, 4, 10];
data2.sort(); // [1, 10, 2, 3, 4] -> string으로 전환 후 정렬
```

- .sort() 메서드 안에서 정렬 기준을 comparator 함수로 설정해야함.
```jsx
const data3 = [1, 2, 3, 4, 10];
data3.sort( (a, b) => a - b );    // [1, 2, 3, 4, 10]
```
