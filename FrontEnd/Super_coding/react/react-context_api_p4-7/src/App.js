import React, { useState } from 'react';
import AuthContext from './context/AuthContext';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        isLoggedIn: isLoggedIn,    // 로그인이 되어 isLoggedIn=true가 되면 context의 isLoggedIn=true가 됨
                                   // 그러면 다른 하위 자식 컴포넌트도 isLoggedIn=true로 상태를 받을 수 있음.
        onLogout: logoutHandler 
      }}>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
