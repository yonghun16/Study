## 데이터 정렬

> Number 정렬 <br />
> String 정렬 <br />
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
- asc : 오름차순
- desc : 내림차순
```jsx
const data3 = [1, 2, 3, 4, 10];
data3.sort( (a, b) => a - b );  // [1, 2, 3, 4, 10], 오름차순, a-b가 양수(positive)이면 a가 b보다 크다고 판단하여 순서 변경 -> 큰 수가 뒤로
data3.sort( (a, b) => b - a );  // [10, 4, 3, 2, 1], 내림차순, b-a가 양수(positive)이면 b가 a보다 크다고 판단하여 순서 변경 -> 작은 수가 뒤로
```


#### String 정렬
```jsx
const data = ['b', 'a', 'd', 'A', 'B', 't'];
data.sort();                                // ['A', 'B', 'a', 'b', 'd', 't']
data.sort( (a, b) => a.localeCompare(b) );  // ['a', 'A', 'b', 'B', 'd', 't']
```


#### Object 정렬
- 여러가지 속성이 있는 객체들을 정렬하려면 어떻게 해야 하는가?
- 프로퍼티별로 정렬 기준을 설정하고 정렬한다.

#### 테이블 정렬
- 테이블에서 여러가지 기준에 따라 정렬해 봅시다.
```jsx
  const [sortOrder, setSortOrder] = useState(null); // asc(오름차순) || desc(내림차순)
  const [sortBy, setSortBy] = useState(null);       // 이름 || 점수 || 점수의 제곱
  const { config, data } = props;

  const handleClick = (label) => {
    // TODO - 정렬 화살표 클릭 시 정렬을 해주는 함수
    if (sortBy && label !== sortBy) {   // 기존의 정렬기준(sortBy)이 있고, 내가 지금 마우스로 누른 label이 그 정렬기준과 다른경우,
      setSortOrder('asc');              // ㄴ다시말해 다른 정렬기준을 선택한 경우
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      // TODO - 정렬된 데이터로 바꿔 끼우는 부분 들어갈 comparator 함수
      const valueA = sortValue(a);
      const valueB = sortValue(b);
      const reverseOrder = sortOrder === 'asc' ? 1 : -1;            // 역방향? 순방향? (오름차순이 기본)

      if (typeof valueA === 'string') {                             // 문자열이면
        return valueA.localeCompare(valueB) * reverseOrder;         // 요렇게 정렬
      } else {
        return (valueA - valueB) * reverseOrder;                    // 나머지는 이렇게
      }
    });

```
