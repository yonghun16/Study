import React from "react";

const AuthContext = React.createContext({      // Context 생성
  isLoggedIn: false,
});

export default AuthContext;

