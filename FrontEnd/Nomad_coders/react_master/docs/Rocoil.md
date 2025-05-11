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
