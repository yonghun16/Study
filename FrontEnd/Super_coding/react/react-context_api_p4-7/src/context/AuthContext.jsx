import React, { useEffect, useState, createContext } from "react";

const AuthContext = createContext({      // Context 생성, AuthContext.Provider 객체 반환
  isLoggedIn: false,
  onLogin: (email, password) => { },
  onLogout: () => { },
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // localStorage에 로그인 정보를 저장하는 useEffect
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }
    else {
      setIsLoggedIn(false);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{      // AuthContext.Provider
      isLoggedIn: isLoggedIn,
      onLogout: logoutHandler,
      onLogin: loginHandler,
    }}> 
      {props.children}       {/* props.children은 AuthContextProvider가 감싸고 있는 하위 컴포넌트들을 의미. */}
    </AuthContext.Provider>
  )
};

export default AuthContext;
