## Module

#### import & export
```jsx
import Toast from './components/Toast';

export default Toast;
```

#### export를 하는 두 가지 방법
- 하나의 파일은 하나의 default export만 가능하다.
- 1. 코드의 마지막에 export default Toast;
- 2. 코드의 처음에 export default function Toast() {...}

#### export default vs export 차이점
- 개수 제한
  - export default : 1개
  - export         : 1개 이상
- import 방식
  - export default : import AnyName from '.file';
  - export         : import { Name } from './file';
- 이름 변경 가능 여부
  - export default : 가능
  - export         : 불가능 (함수의 정확한 이름 사용)

#### import 안의 세부로직
```jsx
import  Toast  from './components/Toast';
```
1. Toast 라는 변수를 선언
2. /components/Toast.js 에서 default export를 찾음
3. 2에서 찾은 default export를 Toast에 할당
