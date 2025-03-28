## useMemo


#### useMemo 
- useMemo는 React의 Hook 중 하나로, 컴포넌트의 성능을 최적화하기 위해 사용된다. 특정 연산의 결과를 메모이제이션하여 불필요한 재계산을 방지하는 역할을 한다.
- useCallback에 들어가는 것이 'Function'였다면, useMemo에 들어가는 것은 'Value'다.
  - 객체, 배열을 memoization 할 때 useMemo 사용

#### useMemo usage
- useMemo의 첫 번째 인자는 연산을 수행하는 함수
- 두 번째 인자는 의존성 배열 ([] 내부 값이 변경될 때만 연산 수행)
```jsx
import { useMemo } from "react";

const MyComponent = ({ items }) => {
  const total = useMemo(() => {
    console.log("총합 계산 중...");
    return items.reduce((sum, item) => sum + item.price, 0);
  }, [items]);

  return <div>총 가격: {total}</div>;
};
```

#### useMemo 주의점
- 컴포넌트 최상단에서 호출해야 함
  - React의 Hook 규칙에 따라 useMemo는 반복문, 조건문, 중첩 함수 안에서 호출하면 안 됨
  - 항상 컴포넌트의 최상단에서 선언해야 정상적으로 동작
