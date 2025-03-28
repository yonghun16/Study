## Fragment

### JSX의 한계
- 하나의 JSX안에 두 개 이상의 요소가 있으면 에러를 발생한다.

### div로 감쌌을 때 문제점
- 리스트 렌더링을 해 주어야 하는 경우 key 값을 추가해 주어야 한다.
- \<div>가 계속해서 중첩될 수 있다.

### React.Fragment (<>...</>)
- <></> 또는 \<React.Fragment></React.Fragment>는 불필요한 부모 요소를 추가하지 않고 여러 요소를 그룹화할 때 사용됨.
- 렌더링 결과에는 포함되지 않음, 내부 요소만 출력됨.
- key 속성이 필요하면 <React.Fragment key="someKey">를 사용해야 함 (<>는 key 속성을 지원하지 않음).
