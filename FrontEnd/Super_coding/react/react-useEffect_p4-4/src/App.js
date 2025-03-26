import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {            // ** useEffect
    // 만약 로그인이 되었다면, isLoggedIn = true
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedInInfo === '1') {
      setIsLoggedIn(true);
    }else {
      setIsLoggedIn(false);
    }
    // 만약 로그아웃이 되었다면, isLoggedIn = false
  }, []); // dependency array -> 빈 객체는 컴포넌트가 렌더링 되었을 때 1번만 로직 수행

  // 로그인 핸들러
  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  // 로그아웃 핸들러 
  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
