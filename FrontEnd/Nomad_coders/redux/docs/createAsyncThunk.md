# createAsyncThunk


### ⚙️ createAsyncThunk란?
| 항목       | 설명                                                                 |
|------------|----------------------------------------------------------------------|
| 정의       | Redux Toolkit에서 비동기 로직을 쉽게 처리하기 위한 함수              |
| 반환값     | `pending`, `fulfilled`, `rejected` 상태를 자동 생성하는 thunk 함수   |
| 내부 동작  | 액션 디스패치 + 프로미스 기반 상태 추적                              |


### 🛠 사용 예시
```js
// 1. 비동기 thunk 생성
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const response = await axios.get('/api/todos');
    return response.data;
  }
);
```


### 🧠 Slice와 통합 예시
```js
import { createSlice } from '@reduxjs/toolkit';
import { fetchTodos } from './thunks';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
```


### 📦 createAsyncThunk의 상태 변화
| 상태            | 설명                                                       |
|-----------------|------------------------------------------------------------|
| `pending`       | thunk 실행 직후, API 요청 시작됨                           |
| `fulfilled`     | API 응답 성공 → payload에 결과가 담겨 reducer로 전달됨     |
| `rejected`      | API 요청 실패 → error 메시지가 전달됨                      |


### ✅ 장점 정리
| 장점                          | 설명                                                        |
|-------------------------------|-------------------------------------------------------------|
| 액션 자동 생성                | `pending`, `fulfilled`, `rejected` 액션을 자동으로 생성     |
| 로딩 상태 관리 쉬움           | 상태별 분기를 명확하게 처리할 수 있어 UI 상태 처리 간편     |
| 표준화된 비동기 처리 패턴 제공 | 모든 비동기 작업을 동일한 구조로 관리 가능                 |
