## context API 1

> https://react.dev/reference/react/createContext <br />
> https://react.dev/reference/react/useContext <br />
> https://react.dev/learn/passing-data-deeply-with-context 

### Context API란?
- React의 Context API는 주로 전역 상태 관리를 위해 사용됨.

### Context API를 쓰는 이유
> props drilling <br />  
> - 컴포넌트 트리에서 부모 → 자식 → 손자 → 그 이하 컴포넌트로 props를 계속 전달해야 하는 문제 <br />
- 간단한 전역 상태 관리를 제공함. 
  - -> 인증정보, 다크모드, 테마설정 등 전역 정보 관리, props drilling 방지
- 리렌더링을 최적화할 수 있는 방법 제공. 
  - -> useMemo, useReducer와 함께 사용하여 불필요한 전체 렌더링을 예방
- 규모가 크고 복잡한 프로젝트에서는 Redux 같은 라이브러리가 필요할 수 있지만, 소규모 프로젝트나 특정 상태 관리에는 Context API만으로 충분.

### Context API 기본 사용법
#### AuthContext.jsx
```jsx
/* 1. Context 생성 (AuthContext.jsx) */
import React from "react";

const AuthContext = React.createContext({      // Context 생성
  isLoggedIn: false,
});
export default AuthContext;
```
#### App.jsx
```jsx
/* 2. Context를 설정(App.jsx). */
// App.js의 렌더링 되는 최상단에 AuthContext를 적용
  return (
    <AuthContext.Provider 
      value={{ 
        isLoggedIn: isLoggedIn,    // 로그인이 되어 isLoggedIn=true가 되면 context의 isLoggedIn=true가 됨
                                   // 그러면 다른 하위 자식 컴포넌트도 isLoggedIn=true로 상태를 받을 수 있음.
      }}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
```
#### Navigation.jsx
```jsx
/* 3. 중간, 하위 자식 컴포넌트 적용(Navigation.jsx). */
// 중간 컴포넌트에서 props를 전달할 필요 없음
const Navigation = (props) => {
  const context = useContext(AuthContext);  // context를 불러옴

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (            // props.isLoggedIn 대신에 context.isLoggedIn을 사용함
          <li> <a href="/">사용자</a> </li>
        )}
        {context.isLoggedIn && (
          <li> <a href="/">어드민</a> </li>
        )}
        {context.isLoggedIn && (
          <li> <button onClick={props.onLogout}>로그아웃</button> </li>
        )}
      </ul>
    </nav>
  );
};
```
