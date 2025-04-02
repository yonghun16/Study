## Redux Toolkit(RTX) 사용법 2


### 여러 개의 Slice 활용하기
- 여러 개의 Slice를 하나의 Store에서 관리하기

### Counter 이외에 Auth state 까지 같이 하나의 Store에서 관리하기
- 컴포넌트에 auth 여부를 적용해 보기
- 로그인 시  -> auth 적용, 프로필 노출
- 로그아웃 시 -> auth 해제, 로그인 창 노출

### 실습
```jsx
// index.jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';

/* slice */
// counterSlice
const counterSlice = createSlice({
  name: 'counter',                                   // reducer name
  initialState: { counter: 0, showCounter: true },   // state
  reducers: {                                        // action
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// authSlice
const initialAuthState = { 
  isAuthenticated: false 
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
});

/* store */
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  },
});

/* actions */
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
```
```jsx
// Header.jsx
import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store';      // authActions를 import

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.logout());          // authActions.logout() 사용 
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth &&
        <nav>
          <ul>
            <li>
              <a href='/'>내 상품들</a>
            </li>
            <li>
              <button onClick={logoutHandler}>  // logoutHandler 사용
                로그아웃
              </button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;
```

### 불변성(immutable)이란?
- 변하지 않는 상태를 유지하는 것
- 원시타입은 문제가 없다. 메모리에서 값을 저장하기 때문에
- 문제는 객체 타입(Array, Object, ... )
- immer 라이브러리
