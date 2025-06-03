# Redux thunk

- redux-thunk는 Redux에서 action creator가 함수(Thunk)를 반환할 수 있도록 하는 미들웨어입니다.
- 기본 Redux는 동기 액션만 다룰 수 있는데, Thunk를 사용하면 비동기 로직도 처리할 수 있습니다.


## 🧠 기본 개념 정리
| 항목              | 설명 |
|-------------------|------|
| Thunk             | 액션 객체가 아니라 **함수**를 반환하는 action creator |
| 목적              | 비동기 로직(API 호출 등)을 Redux에서 처리하기 위함 |
| 의존성            | `redux-thunk` 패키지 (Redux Toolkit에서는 내장) |
| 설치              | `npm install redux-thunk` (Redux Toolkit 사용 시 생략 가능) |
| 역할              | `dispatch`로 함수 실행 → 비동기 흐름 제어 |


## 📄 예시 코드 (React + Redux + Thunk)
| 파일명            | 역할                                  |
|-------------------|---------------------------------------|
| `userActions.js`  | Thunk 기반 액션 정의                  |
| `userReducer.js`  | 사용자 상태 관리 리듀서               |
| `store/index.js`  | Redux store 생성 및 Thunk 연결        |
| `App.jsx`         | React에서 Thunk 디스패치 및 상태 사용 |

### 🔧 1. actions/userActions.js
```js
// 액션 생성자 (Thunk)
export const setUser = (user) => ({
  type: 'SET_USER',
  payload: user,
})

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const res = await fetch('/api/user')
      const data = await res.json()
      dispatch(setUser(data))
    } catch (err) {
      console.error('유저 불러오기 실패:', err)
    }
  }
}
```

### 🧠 2. reducers/userReducer.js
```js
const initialState = {
  user: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }
    default:
      return state
  }
}

export default userReducer
```

### 🏗 3. store/index.js
```js
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer'

const rootReducer = combineReducers({
  user: userReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
```

### 🧩 4. App.jsx (또는 UserComponent.jsx 등)
```js
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './actions/userActions'

const App = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div>
      <h1>유저 정보</h1>
      {user ? (
        <div>
          <p>이름: {user.name}</p>
          <p>이메일: {user.email}</p>
        </div>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  )
}

export default App
```


## 🚀 예시 코드 (React + Redux Toolkit + createAsyncThunk)
| 항목                   | Redux Thunk 방식                | Redux Toolkit 방식 (`createAsyncThunk`) |
|------------------------|----------------------------------|------------------------------------------|
| 비동기 액션 처리       | 직접 dispatch로 구현             | createAsyncThunk로 간단하게 처리         |
| 상태 코드              | 수동 관리                        | 자동으로 pending, fulfilled, rejected 제공 |
| 코드량                 | 많음                             | 간결함                                    |
| 타입 안정성            | 낮음                             | 높음 (TS 친화적)                          |
| 유지보수               | 복잡                             | 구조화되고 명확함                         |

### 📁 1. features/user/userSlice.js
```js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// 비동기 액션 생성
export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const res = await fetch('/api/user')
  const data = await res.json()
  return data
})

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default userSlice.reducer
```

### 🏗 2. app/store.js
```js
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/user/userSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store
```

### 🧩 3. App.jsx (또는 UserComponent.jsx)
```js
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './features/user/userSlice'

const App = () => {
  const dispatch = useDispatch()
  const { user, status, error } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <div>
      <h1>유저 정보</h1>
      {status === 'loading' && <p>로딩 중...</p>}
      {status === 'failed' && <p>에러 발생: {error}</p>}
      {status === 'succeeded' && user && (
        <div>
          <p>이름: {user.name}</p>
          <p>이메일: {user.email}</p>
        </div>
      )}
    </div>
  )
}

export default App
```


## 🚀 Redux Thunk vs Redux Toolkit + createAsyncThunk
| 비교 항목              | `redux-thunk` (전통적 방식)      | `createAsyncThunk` (Redux Toolkit)        |
|------------------------|----------------------------------|-------------------------------------------|
| 코드 작성량            | 많음                             | 적음                                      |
| 액션 타입 정의 필요    | 직접 작성                        | 자동 생성 (`pending`, `fulfilled`, `rejected`) |
| 비동기 흐름 처리 방식  | 수동적으로 `dispatch` 사용       | 추상화된 API 제공                         |
| 타입 안정성            | 낮음                             | 높음 (TS 지원이 뛰어남)                   |
| 유지보수               | 복잡할 수 있음                   | 간결하고 구조화됨                         |


## ✅ 결론
- redux-thunk는 비동기 작업을 위한 Redux의 필수 미들웨어 중 하나입니다.
- 그러나 **Redux Toolkit의 createAsyncThunk**를 사용하면 훨씬 더 간결하고 안정적인 비동기 로직 작성이 가능합니다.
- 실제 프로젝트에서는 Redux Toolkit을 사용하는 것이 현대적인 방식입니다.
