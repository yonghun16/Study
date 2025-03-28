## useCallback

### useCallback
- 특정 함수를 __메모이제이션__하여 불필요한 렌더링을 방지하는 역할을 함.
- useCallback은 함수 컴포넌트 내부에서 __새로운 함수가 생성되는 것을 방지__하여, __함수의 참조(reference)가 변경되지 않도록 유지__

### Usage
- 첫 번째 인자로 콜백 함수를 받습니다.
- 두 번째 인자로 의존성 배열 (dependencies) 을 받습니다.
- dependencies가 변경되지 않는 한, useCallback은 이전의 함수를 재사용합니다.
```jsx
const memoizedCallback = useCallback(() => {
  // 실행할 코드
}, [dependencies]);
```

### useCallback을 사용해야 하는 경우
1. 함수를 Props로 전달할 때 (자식 컴포넌트의 불필요한 리렌더링 방지)
- 부모 컴포넌트에서 함수를 정의하고 자식 컴포넌트에 Props로 전달할 때, 함수가 매번 새로 생성되면 자식 컴포넌트가 불필요하게 리렌더링됩니다.
- useCallback을 사용하여 함수의 참조가 유지되도록 하면, 자식 컴포넌트가 불필요하게 리렌더링되는 것을 방지할 수 있습니다.
```jsx
import { useState, useCallback } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);

  // - useCallback을 사용하지 않으면 매 렌더링마다 새로운 handleClick 함수가 생성됨 -> Child 컴포넌트 재랜더링
  // - useCallback을 사용하기에 새로운 handleClick 함수가 생성되지 않는다. 따라서 props로 받은 
  //   handleClick함수가 새롭지 않은 걸로 받아들여 'Virtual DOM Diffing'에 의해 자식 컴포넌트를 재랜더링을 하지 않음.
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}
```

2. 함수를 의존성 배열에 넣어야 할 때 (useEffect, useMemo 등과 함께 사용)
> useCallback 안에 변하는 값이 들어간다면? <br />
> 만약에 함수가 생성이 될 때마다 바뀌어야 하는 값이 있다면, 그 변화를 useCallback에서 기억을 해 주어야 한다. <br />
> 그러한 값들을 dependencies에 넣어주면 된다. <br />
- useEffect에서 의존성 배열에 함수를 포함해야 하는 경우, 함수가 매 렌더링마다 새로 생성되면 불필요한 재실행이 발생할 수 있습니다.
- useCallback을 사용하면 함수 참조가 유지되므로, 의존성 배열이 불필요하게 변경되지 않습니다.
  - count가 안바뀐다 -> useCallback()내 count가 안바뀐다 -> 함수가 안바뀐다 -> 자식 컴포넌트에 pops가 바뀐게 없다고 판단 -> 렌더링 안함.
  - count가 바뀐다 -> useCallback()내 count가 바뀐다 -> 함수가 바뀐다 -> 렌더링
```jsx
import { useState, useEffect, useCallback } from "react";

function Example() {
  const [count, setCount] = useState(0);

  const logCount = useCallback(() => {
    console.log(`Count is ${count}`);
  }, [count]);       // useCallback 없으면 매 렌더링마다 새로운 함수가 생성됨 -> 재렌더링
                     // count함수가 바뀌지 않는 한 렌더링을 하지 않음. (불필요한 렌더링 감소)
  useEffect(() => {
    logCount();
  }, [logCount]);

  return <button onClick={() => setCount(count + 1)}>Increase</button>;
}
```

3. 성능 최적화가 필요한 이벤트 핸들러 (특히, 리스트 렌더링 시)
- 리스트 아이템에서 이벤트 핸들러를 생성할 때, useCallback을 사용하면 불필요한 함수 재생성을 줄일 수 있습니다.
```jsx
import { useState, useCallback } from "react";

function List({ items }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = useCallback((id) => {
    setSelected(id);
  }, []);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => handleSelect(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```
