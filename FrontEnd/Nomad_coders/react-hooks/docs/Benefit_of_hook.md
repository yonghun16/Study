# 훅을 쓰면 좋은점.

### counter 예제 비교
#### no hook
```jsx
import React from 'react';

export default class NoUseHookCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  modify = (n) => {
    this.setState({ 
      count: n 
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.modify(this.state.count + 1)}>
          No hook Count is {this.state.count}
        </button>
      </div>
    );
  }
}
```

#### using useState hook
```jsx
import React, { useState } from 'react'

export function UseStateCounter() {
  const [count, setCount] = useState(0)

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        useState Count is {count}
      </button>
    </div>
  )
}
```

## 훅을 쓰면 얻는 이점들
### 1. 코드가 간결하고 읽기 쉬움
  - useState, useEffect 같은 훅은 함수형 컴포넌트 내에서 상태와 생명주기를 간결하게 사용할 수 있게 해줍니다.
```jsx
// 함수형 (간단하고 직관적)
const [count, setCount] = useState(0);

// 클래스형 (더 길고 복잡함)
this.state = { count: 0 };
this.setState({ count: this.state.count + 1 });
```


### 2. 로직 재사용성이 높음 (Custom Hook)
- 훅을 사용하면 여러 컴포넌트 간에 상태 관련 로직을 쉽게 재사용할 수 있습니다.
- 커스텀 훅(custom hook)을 만들어 로직을 깔끔하게 분리할 수 있어요.
```jsx
// useCounter.js
import { useState } from 'react';

function useCounter(initial) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount((c) => c + 1);
  return { count, increment };
}

export default useCounter;
}
```
```jsx
// App.js
import useCounter from './components/useCounter'

function App() {
  const { count, increment } = useCounter(0);

  return (
    <>
      <button onClick={increment}>useCounter Count is {count}</button>
    </>
  )
}

export default App
```


### 3. 더 나은 추상화 및 분리
- 훅을 통해 상태 및 '사이드 이펙트'를 잘게 쪼개고 모듈화할 수 있어 유지보수성이 향상됩니다.


### 4. 생명주기 관리가 더 쉬움
- 클래스에서는 componentDidMount, componentDidUpdate, componentWillUnmount로 나눠야 했던 생명주기를 useEffect 하나로 통합해서 처리할 수 있습니다.


### 5. 더 나은 성능과 최적화 도구 지원
- React 팀은 함수형 컴포넌트와 훅을 기준으로 최적화 기능(예: React.memo, useCallback, useMemo)을 제공하고 있습니다.

