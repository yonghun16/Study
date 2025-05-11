# Recoil

```bash
npm install recoil
```

### Recoil
- Recoil은 React 애플리케이션을 위한 상태 관리 라이브러리입니다. Facebook에서 개발했으며, React의 철학과 매우 잘 맞는 API를 제공하여 복잡한 컴포넌트 트리에서도 상태 관리를 간편하게 할 수 있게 해줍니다.


### Recoil의 핵심 개념

#### 1. Atoms (원자)
- 상태(state)의 최소 단위입니다.
- 컴포넌트들이 공유할 수 있으며, useRecoilState, useRecoilValue 등으로 접근합니다.
- 값이 변경되면 그 값을 구독하고 있는 컴포넌트들이 자동으로 리렌더링됩니다.
```tsx
import { atom } from 'recoil';

export const countState = atom({
  key: 'countState', // 고유한 ID
  default: 0,        // 초기값
});
```

#### 2. Selectors (선택자)
- 파생 상태를 만들기 위해 사용합니다.
- 여러 Atom 또는 Selector로부터 값을 계산해 새로운 값을 만들 수 있습니다.
- get과 set을 정의해서 읽기 전용 또는 읽기/쓰기 모두 가능하게 만들 수 있습니다.
```tsx
import { selector } from 'recoil';
import { countState } from './atoms';

export const doubleCountState = selector({
  key: 'doubleCountState',
  get: ({ get }) => get(countState) * 2,
});
```

#### 3.	RecoilRoot
- 상태를 사용할 수 있도록 React 컴포넌트 트리를 감싸는 상위 컴포넌트입니다.
- 반드시 애플리케이션 최상단에 한 번만 선언해야 합니다.
```tsx
import { RecoilRoot } from 'recoil';

const App = () => (
  <RecoilRoot>
    <MyComponent />
  </RecoilRoot>
);
```

### useRecoilValue
- useRecoilValue는 Recoil 상태(atom 또는 selector)의 값을 읽기만 할 때 사용하는 React Hook입니다.
이 Hook은 값을 읽기 전용(read-only) 으로 가져오고, 상태를 변경할 수는 없습니다.

#### 1. 기본 문법
- someAtomOrSelector: atom 또는 selector 객체
- 반환값: 현재 상태의 값
- 값이 바뀌면 이 컴포넌트는 자동으로 리렌더링됩니다.
```tsx
const value = useRecoilValue(someAtomOrSelector);
```

#### 2. 주의 할 점
- 상태를 변경하려면 useRecoilState나 useSetRecoilState를 사용해야 합니다.
- 비동기 selector를 사용할 경우 Suspense와 함께 써야 할 수 있습니다.

#### 3. Selector 값 읽기
- selector를 이용해 파생 상태를 만들고, useRecoilValue로 쉽게 읽을 수 있습니다.
```tsx
import { selector, useRecoilValue } from 'recoil';
import { countState } from './atoms';

const doubledCount = selector({
  key: 'doubledCount',
  get: ({ get }) => get(countState) * 2,
});

function DoubleCounterDisplay() {
  const double = useRecoilValue(doubledCount);
  return <div>2배 카운트: {double}</div>;
}
```


### useSetRecoilState
- useSetRecoilState는 Recoil 상태를 설정(변경)만 할 때 사용하는 React Hook입니다.
- 상태 값을 읽지 않고 값만 바꾸고 싶을 때 유용합니다. 특히 이벤트 핸들러 안에서 자주 사용됩니다
- someAtomOrWritableSelector: atom 또는 set이 정의된 selector
- setValue는 새로운 값으로 상태를 설정하거나 함수 형태로 이전 값을 기반으로 업데이트할 수 있습니다.
```tsx
const setValue = useSetRecoilState(someAtomOrWritableSelector);
```

#### 1. 사용 예시 (Atom 값을 설정)
- setCount는 countState atom을 업데이트하는 함수입니다.
- 이전 상태를 기반으로 증가시키는 prev => prev + 1 패턴도 가능합니다.
```tsx
// Atom 값을 설정
import { atom, useSetRecoilState } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

function CounterButton() {
  const setCount = useSetRecoilState(countState);

  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      +1 증가
    </button>
  );
}
```

#### 2. 사용 예시 (Selector 값을 설정)
- selector에 set만 정의해두고, 이를 호출해서 상태를 제어할 수도 있습니다.
```tsx
// Selector 값을 설정
import { selector, useSetRecoilState } from 'recoil';
import { countState } from './atoms';

const resetCountSelector = selector({
  key: 'resetCountSelector',
  set: ({ set }) => {
    set(countState, 0);
  },
});

function ResetButton() {
  const resetCount = useSetRecoilState(resetCountSelector);

  return (
    <button onClick={resetCount}>
      초기화
    </button>
  );
}
```
