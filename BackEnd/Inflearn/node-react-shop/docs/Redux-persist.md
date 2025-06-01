# Redux-persist


```bash
npm install redux-persist
```


### 🔍 왜 redux-persist를 쓰는가?
- 기본 Redux는 페이지를 새로고침하면 상태가 초기화됩니다. 예를 들어:
  - 로그인 정보
  - 장바구니 데이터
  - 사용자 설정

- 이런 것들이 새로고침할 때 사라지는 걸 방지하려면, 상태를 지속(persist) 시켜야 합니다. 그걸 자동으로 해주는 게 redux-persist입니다.


### 🧠 핵심 개념
| 개념             | 설명                                                                       |
|------------------|----------------------------------------------------------------------------|
| `persistStore`   | Redux store를 감싸서, 상태를 저장하고 복원할 수 있도록 설정합니다.         |
| `persistReducer` | 기존 reducer를 감싸서, persist 가능한 형태로 변환합니다.                   |
| `storage`        | 상태를 저장할 저장소로, 기본적으로 `localStorage`를 사용합니다.            |
| `PersistGate`    | 상태 복원이 완료될 때까지 렌더링을 지연시키는 컴포넌트입니다.              |
| `whitelist`      | 저장할 slice 이름들을 배열로 지정하여, 일부 reducer만 persist 하게 합니다. |
| `blacklist`      | 저장하지 않을 slice 이름들을 배열로 지정하여, 특정 reducer를 제외합니다.   |

### ✅ 간단한 사용 예시
```js
// store.js
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage
import { combineReducers } from 'redux';
import someReducer from './someSlice'; // 예시 reducer

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  some: someReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
```

```jsx
// main.jsx 또는 index.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
```
