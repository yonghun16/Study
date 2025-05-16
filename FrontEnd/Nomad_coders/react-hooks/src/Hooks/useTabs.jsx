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
