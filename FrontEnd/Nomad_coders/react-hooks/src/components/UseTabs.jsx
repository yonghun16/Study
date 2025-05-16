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
