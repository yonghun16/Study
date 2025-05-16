# 컴포넌트의 재사용 vs 커스텀 훅의 재사용

### 비교
| 목적              | 커스텀 훅 (Custom Hook)                | 재사용 컴포넌트 (Component)       |
|-------------------|----------------------------------------|-----------------------------------|
| 상태 로직 재사용  | ✅ 매우 적합                           | ❌ 부적합                         |
| UI 포함           | ❌ X (로직만)                          | ✅ O (로직 + JSX 포함)            |
| 재사용성          | 상태/로직 단위로 재사용                | UI 단위로 재사용                  |
| 유연성            | ✅ UI 없이 다양한 곳에서 활용 가능     | ❌ 고정된 구조                    |
| 예시              | `useCounter`, `useForm`, `useFetch`    | `<Button>`, `<Card>`, `<Modal>`   |

### 언제 커스텀 훅을 쓰고, 언제 컴포넌트를 써야 하나?
| 상황                                                 | 선택                                      |
|------------------------------------------------------|-------------------------------------------|
| UI는 다르지만 '로직'은 같음                          | ✅ 커스텀 훅 (로직만 재사용)              |
| 'UI + 로직'을 같이 재사용하고 싶음                   | ✅ 컴포넌트 (전체 묶어서 재사용)          |
| 상태/이벤트/비즈니스 '로직'을 여러 컴포넌트에 나눠 쓰고 싶음 | ✅ 커스텀 훅                      |
| 디자인이나 '스타일까지 통일'해서 쓰고 싶음           | ✅ 컴포넌트                               |


### 예시
#### 커스텀 훅
- '로직'을 다양한 UI에 재사용하기 유용함.
```JSX
// useCounter.js
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const inc = () => setCount(c => c + 1);
  const dec = () => setCount(c => c - 1);
  return { count, inc, dec };
}
```
```JSX
const CounterA = () => {
  const { count, inc } = useCounter();
  return <button onClick={inc}>A Count: {count}</button>;
};

const CounterB = () => {
  const { count, dec } = useCounter(10);
  return <button onClick={dec}>B Count: {count}</button>;
};
```

#### 컴포넌트
- 재사용하려면 전체 UI를 가져가야함.
- 로직을 다른 UI에서 쓰기 어렵고 유연하지 않음.
```JSX
// CounterComponent.js
function CounterComponent() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}
```
