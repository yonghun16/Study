## Custom Hook


### Custom Hook?
- Custom Hook은 React의 재사용 가능한 로직을 함수로 분리하여 관리하는 사용자 정의 Hook입니다.

### Custom Hook의 특징
- 1. use로 시작해야 함 → 예: useFetchData, useAuth, useDarkMode
- 2. 일반 함수와 다른점은 다른 Hook(useState, useEffect 등)을 사용할 수 있음
- 3. 리액트 상태를 사용할 수 있음
- 4. 컴포넌트가 아니므로 JSX를 반환하지 않음
- 5. 로직을 추상화하여 재사용 가능

### Custom Hook의 장점
- 코드 재사용성 증가 → 여러 컴포넌트에서 동일한 로직을 사용 가능
- 컴포넌트 코드가 더 간결해짐 → 복잡한 비즈니스 로직을 분리
- 상태 관리가 쉬워짐 → 로컬 스토리지, API 호출, 폼 상태 등을 효율적으로 관리

### Custom Hook을 언제 사용해야 할까?
- 같은 로직이 여러 컴포넌트에서 반복될 때
- 비즈니스 로직이 컴포넌트에서 너무 많아질 때
- API 요청, 상태 관리, 폼 관리 등 특정 기능을 분리하고 싶을 때

### 사용예제 1
```JSX
/* useCounter.js */
import { useState, useEffect } from 'react';

const useCounter = (isForward) => {      // isForward를 인자로 받음
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {   // 비동기적으로 실행
      setCounter((prevCounter) => prevCounter + 1*(isForward ? 1 : -1));  // Foword면 +1, Backward면 -1
    }, 1000);

    return () => clearInterval(interval);  // 컴포넌트의 마운트가 끝나면, 인터벌을 정리함.
  }, []);

  return counter;  // 0을 반환, 1초 후 setCounter()에 의해 다시 랜더링 되면, 1이 더해진 counter를 또 반환
};

export default useCounter;
```
```JSX
/* ForwardCounter.js */
import { useState, useEffect } from 'react';
import Card from './UI/Card/Card';
import useCounter from './hooks/useCounter';


const ForwardCounter = () => {
  const counter = useCounter(true);   // 커스텀 훅에 true를 인자로 전달

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
```
