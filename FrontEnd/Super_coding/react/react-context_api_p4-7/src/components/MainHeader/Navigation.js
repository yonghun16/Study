import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  const context = useContext(AuthContext);  // context를 불러옴

  return (
    <nav className={classes.nav}>
      <ul>
        {context.isLoggedIn && (            // props.isLoggedIn 대신에 context.isLoggedIn을 사용함
          <li>
            <a href="/">사용자</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <a href="/">어드민</a>
          </li>
        )}
        {context.isLoggedIn && (
          <li>
            <button onClick={props.onLogout}>로그아웃</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
