## Module

### import & export
```jsx
import Toast from './components/Toast';

export default Toast;
```

### export default vs export 차이점
- 개수 제한
  - export default : 1개
  - export         : 1개 이상
- import 방식
  - export default : import AnyName from '.file';
  - export         : import { Name } from './file';
- 이름 변경 가능 여부
  - export default : 가능
  - export         : 불가능 (함수의 정확한 이름 사용)

### export를 하는 두 가지 방법
- 하나의 파일은 하나의 default export만 가능하다.
  1. 코드의 마지막에 export default Toast;
  2. 코드의 처음에 export default function Toast() {...}

### import 안의 세부로직
```jsx
import  Toast  from './components/Toast';
```
1. Toast 라는 변수를 선언 -> 변수명은 다른 값으로 얼마든지 가능하다.(default export를 찾음)
2. /components/Toast.js 에서 default export를 찾음
3. 2에서 찾은 default export를 Toast에 할당

### named export (default export가 아닌 단순 export)
- default export는 한 파일 당 하나만 가능하나
- named export는 여러 개도 가능하다.
- named export는 이름을 변경할 수 없다.
- 그러나 "컴포넌트 하나 별로 하나의 관심사만 있어야 된다."는 react의 가치에 맞게 되도록이면 하나의 export만 하는 것이 react가 지향하는 패턴이다.
```jsx
export default Toast;
export {hello, world};

import Toast, {hello, world} from './components/Toast';
```

### export path
- import 시에 경로에 ./이나 ../가 없으면 그건 라이브러리를 import 하는 것
- 설치된 라이브러리는 package.json에서 확인 가능하다.

