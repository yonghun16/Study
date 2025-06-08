# react-reponsive-carousel

> https://www.npmjs.com/package/react-responsive-carousel
```bash
npm install react-responsive-carousel
```

- react-responsive-carousel은 반응형(Responsive) 이미지 슬라이더/캐러셀을 쉽게 구현할 수 있도록 도와주는 React용 라이브러리입니다. 간단한 API와 기본 제공 스타일 덕분에 빠르게 UI에 적용할 수 있습니다.

## 🔧 주요 기능
| 기능                  | 설명                                                          |
|-----------------------|---------------------------------------------------------------|
| 반응형 디자인         | 다양한 해상도에서 잘 작동                                     |
| 자동 재생             | `autoPlay` 설정으로 자동 슬라이드 가능                        |
| 무한 루프             | `infiniteLoop` 설정 시 끝나지 않고 계속 반복됨                |
| 썸네일                | `showThumbs` 옵션으로 하단 썸네일 표시 여부 설정 가능         |
| 캡션 (설명)           | 각 슬라이드 하단에 텍스트(`legend`) 추가 가능                 |
| 사용자 제어 버튼      | 화살표, 인디케이터 등 기본 제공                               |
| 키보드 제어           | 좌우 화살표 키로 슬라이드 이동 가능                           |
| 접근성 (a11y) 지원    | 스크린 리더를 위한 접근성 속성 자동 처리                      |



## 🧪 기본 사용 예시
```jsx
import "react-responsive-carousel/lib/styles/carousel.min.css"; // 스타일 import
import { Carousel } from 'react-responsive-carousel';

function MyCarousel() {
  return (
    <Carousel autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src="https://example.com/img1.jpg" alt="img1" />
        <p className="legend">Slide 1</p>
      </div>
      <div>
        <img src="https://example.com/img2.jpg" alt="img2" />
        <p className="legend">Slide 2</p>
      </div>
    </Carousel>
  );
}
```

## ⚙️ 자주 사용하는 props
| Prop 이름          | 설명                                                     |
|---------------------|----------------------------------------------------------|
| `autoPlay`          | 자동 재생 여부 (기본값: false)                           |
| `infiniteLoop`      | 무한 루프 여부                                           |
| `showThumbs`        | 썸네일 표시 여부 (기본값: true)                          |
| `showStatus`        | 현재 슬라이드 위치 (`1 / 3` 같은 표시) 표시 여부         |
| `showIndicators`    | 점(dot) 네비게이션 표시 여부                             |
| `interval`          | 자동 재생 시 각 슬라이드 간격 시간 (기본: 3000ms)        |
| `stopOnHover`       | 마우스 호버 시 자동 재생 일시 정지 여부                  |
| `selectedItem`      | 현재 보여줄 슬라이드 인덱스 설정                         |
| `onChange(index)`   | 슬라이드 변경 시 호출되는 콜백 함수                      |
