## JSX 

### JSX는 JavaScript 안에 있는 HTML 코드

### React snippet
```jsx
rsc       // reactStatelessComponent     -> vscode에서 빈 컴포넌트 만들기 스니펫
rafc      // reactArrowFunctionComponent -> vim에서 빈 컴포넌트 만들기 스니펫
rafce     // reactArrowFunctionComponentExport -> vim에서 빈 컴포넌트 만들기 스니펫

```

### JSX : 하나의 컴포넌트에는 반드시 하나의 root element를 리턴해야 한다.
```jsx
<>
</>
```

### JS VS JSX
- HTML 태그 사용 
  - JS  : 문자열 또는 document.createElement 사용
  - JSX : 직접 HTML 태그처럼 사용 가능
- 속성 표기법
  - JS  : setAttribute("class", "value") 사용
  - JSX : className, htmlFor 등 JS와 다른 표기법 사용
- 이벤트 핸들러
  - JS  : element.onclic = function 
  - JSX : OnClick 처럼 CamelCase로 사용
- 조건문 사용
  - JS  : if, else, else if
  - JSX : 삼항 연산자 사용( &&, ||, ? : )
- 반복문 사용
  - JS  : for, while
  - JSX : map() 사용
- 주석
  - JS  : //, /* */
  - JSX : {/* */} 사용


### Formatter
- Vscode 포메팅 단축키 : 기본 설정 > 바로 가기 키 > 문서 서식(Format Document)
  - default : \<shitft\> + \<option\> + f
- Nvchad 포메팅 단축키 : \<leader\> + f + m

