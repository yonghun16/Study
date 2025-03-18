## CSS

#### BEM
- BEM : Block Element Modifier
- 소문자 숫자만 조합
- 조합은 하이픈(-)으로 연결하여 작명
- 네이밍 조합은 '형태' > '의미' > '순서__상태'를 기본 순서로 사용
- 네이밍 조합의 _ 는 파일, 폴더, 이미지 등에 사용
- BEM에서는 하위 엘리먼트의 하위 엘리먼트가 존재할 경우, 직접적인 부모 블록을 기준으로 네이밍한다. 즉, “계층 구조를 CSS 클래스 명에 반영하지 않는다.”
```html
<div class="card">
  <div class="card__header">
    <h2 class="card__header__title">Title</h2> <!-- ❌ 잘못된 네이밍 -->
  </div>
</div>

<div class="card">
  <div class="card__header">
    <h2 class="card__title">Title</h2> <!-- ✅ "card"를 기준으로 네이밍 -->
  </div>
</div>
```

#### CSS 적용 방법들
- inline CSS 
- **emotion**
- **styled-component**
- tailwindcss
- css module
- etc

#### rem (root em)
- rem(전역적) : 문서의 최상위 요소 (\<html>)의 font-size를 기준으로 상대적인 크기를 설정하는 단위
- em(상대적) : 부모 요소의 font-size에 따라 크기 결정
- 1rem = \<html> 요소의 font-size
- 기본적으로 브라우저의 기본 font-size는 16px이므로, 1rem = 16px이 됩니다.
- 만약 \<html>의 font-size를 20px로 설정하면, 1rem = 20px이 됩니다.
