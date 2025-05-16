# useTabs
- useTabs는 일반적으로 탭 UI(예: 여러 섹션 중 하나를 선택해서 보여주는 UI)를 구현할 때 사용하는 커스텀 훅입니다. 사용자는 여러 개의 “탭 항목” 중 하나를 선택할 수 있고, 선택된 항목의 데이터를 컴포넌트에서 사용할 수 있도록 도와줍니다.

### 기본 형태
```jsx
import { useState } from 'react';

function useTabs(initialIndex, allTabs) {
  if (!Array.isArray(allTabs)) {
    throw new Error("allTabs must be an array");
  }

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return {
    currentItem: allTabs[currentIndex],
    currentIndex,
    changeItem: setCurrentIndex,
  };
}
```
