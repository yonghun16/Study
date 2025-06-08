# react-image-gallery


> https://github.com/xiaolin/react-image-gallery
> 데모 보기: https://xiaolin.dev/react-image-gallery
```bash
npm install react-image-gallery
```

- **React에서 이미지 슬라이드 갤러리(carousel/gallery)**를 쉽게 구현할 수 있게 해주는 컴포넌트 라이브러리입니다.


## 주요기능
| 기능               | 설명                                                                 |
|--------------------|----------------------------------------------------------------------|
| 이미지 슬라이드     | 기본적인 슬라이더 갤러리 기능 제공                                  |
| 썸네일 지원         | 이미지 하단에 썸네일 표시 가능                                      |
| 자동 재생           | `autoPlay` 옵션으로 자동 슬라이드 가능                              |
| 전체화면 모드       | 전체화면 보기 버튼 및 ESC로 종료 지원                               |
| 네비게이션 버튼     | 좌우 화살표 버튼 기본 제공                                          |
| 키보드 제어         | 화살표 키로 이동 가능                                               |
| 커스터마이징 가능    | 썸네일, 렌더링 방식, 아이콘 등을 커스텀 컴포넌트로 대체 가능       |


## 🧪 기본 사용 예시
```jsx
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
  {
    original: 'https://example.com/image1.jpg',
    thumbnail: 'https://example.com/thumb1.jpg',
  },
  {
    original: 'https://example.com/image2.jpg',
    thumbnail: 'https://example.com/thumb2.jpg',
  },
];

function MyGallery() {
  return <ImageGallery items={images} />;
}
```


## ⚙️ 자주 사용하는 props
| Prop 이름               | 설명                                                |
|-------------------------|-----------------------------------------------------|
| `items`                 | 이미지 배열 (`original`, `thumbnail` 필드 포함)     |
| `autoPlay`              | 자동 재생 여부 (`true` 설정 시 자동 슬라이드 시작)  |
| `showThumbnails`        | 썸네일 표시 여부 (`true` 또는 `false`)              |
| `showFullscreenButton`  | 전체화면 버튼 표시 여부                             |
| `showPlayButton`        | 재생 버튼 표시 여부                                 |
| `slideInterval`         | 자동 슬라이드 시간 간격 (밀리초, 예: `3000`)        |
| `onSlide(index)`        | 슬라이드 변경 시 호출되는 콜백 함수                 |
