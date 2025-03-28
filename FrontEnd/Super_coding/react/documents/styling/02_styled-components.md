## Styled Components

### CSS-in-JS
- 자바스크립트 코드를 CSS에서 작성하는 방식
- npm install styled-components
- CSS-in-JS 방식은 CSS를 컴포넌트 레벨 추상화 해서 관리할 수 있다.
- styled-components는 리액트 컴포넌트 스타일링을 위해 CSS를 JS로 쓸 수 있게 만든 가장 많이 쓰이는 도구 중 하나다.

### styled-components
```jsx
import styled from "styled-components";

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl >
        <FomtControlLabel>목표</FomtControlLabel>
        <FomtControlInput
          type="text"
          onChange={goalInputChangeHandler} isValid={isValid}   // **
        />
      </FormControl>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );

const FomtControlInput = styled.input`
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
  ${props => !props.isValid && `
    background-color: salmon;
    border-color: red;
  `}
`;

```
