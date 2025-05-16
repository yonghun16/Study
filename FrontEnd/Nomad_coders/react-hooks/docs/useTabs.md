# useTabs
- useTabs는 일반적으로 탭 UI(예: 여러 섹션 중 하나를 선택해서 보여주는 UI)를 구현할 때 사용하는 커스텀 훅입니다. 사용자는 여러 개의 “탭 항목” 중 하나를 선택할 수 있고, 선택된 항목의 데이터를 컴포넌트에서 사용할 수 있도록 도와줍니다.

### 기본 형태
#### useTabs
```jsx
import { useState } from 'react';

function useTabs(initialIndex, allTabs) {      // 시작 index와 content
  // 예외 처리 (allTabs가 배열이 아닐 때)
  if (!Array.isArray(allTabs)) {
    throw new Error("allTabs must be an array");
  }

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return {
    currentItem: allTabs[currentIndex],   // 현재탭에 대한 컨텐츠
    currentIndex,                         // 현재탭의 인덱스
    changeItem: setCurrentIndex,          // 탭 바꾸기
  };
}

export default useTabs;
```

#### Component
```jsx
import React from 'react';
import useTabs from '../Hooks/useTabs';

// 탭에 대한 컨텐츠 내용(배열 type)
const content = [
  {
    tab: 'Section 1',  // index 0
    content: 'I am the content of Section 1',
  },
  {
    tab: 'Section 2',  // index 1
    content: 'I am the content of Section 2',
  },
];

function UseTabs() {
  const { currentIndex, currentItem, changeItem } = useTabs(0, content);  // 시작 index 와 컨텐츠 배열

  return (
    <div>
      {content.map((section, index) => (
        <button
          key={index}
          onClick={() => changeItem(index)}    // 탭 바꾸기
          style={{
            fontWeight: currentIndex === index ? 'bold' : 'normal',
          }}
        >
          {section.tab}                {/* 탭 이름 */}
        </button>
      ))}
      <div>
        <p>{currentItem.content}</p>   {/* 현재 탭의 컨텐츠 */}
      </div>
    </div>
  );
}

export default UseTabs;
```
