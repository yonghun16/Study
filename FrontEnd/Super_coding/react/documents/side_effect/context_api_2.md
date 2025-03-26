## Context API 2

>> https://react.dev/learn/scaling-up-with-reducer-and-context

#### Context의 한계
- 잦은 변화가 일어나는 상태를 다루기에는 적합하지가 않다.
  - Context가 커지기 때문에 유지보수가 힘들어지며 성능이 저하된다.
- 모든 컴포넌트 간 통신을 다 Context에서 다루려고 하면 안된다.
  - Context는 자원을 소비한다, 모든 커뮤니케이션 적용하면 App이 무거워진다.

#### Provider
- Provider는 createContext를 호출하면 자동으로 생성되는 내장 속성.
- Provider를 통해 하위 컴포넌트들에게 상태 값을 전역적으로 공유할 수 있음.
- AuthContext.Provider를 감싸면 하위 컴포넌트들은 useContext(AuthContext)를 통해 value에 설정된 데이터를 가져올 수 있음.

#### 커스텀 context 컴포넌트 만들기
```jsx
/* AuthContext.js */
import React, { useEffect, useState, createContext } from "react";

const AuthContext = createContext({      // Context 생성, AuthContext.Provider 객체 반환
  isLoggedIn: false,
  onLogin: (email, password) => { },
  onLogout: () => { },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* localStorage에 로그인 정보를 저장하는 useEffect
    ...
  -----------------------------------------------*/

  return (
    <AuthContext.Provider value={{
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }}> 
      {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContext;

```
```jsx
/* Navigation.js */
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

import classes from './Navigation.module.css';

const Navigation = () => {
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
          <li> <button onClick={context.onLogout}>로그아웃</button> </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
```
