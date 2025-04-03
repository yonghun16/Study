## Redux 비동기 처리


### 리덕스 비동기 처리
- 리듀서는 반드시 '순수 함수'여야 하고 '사이드 이펙트'가 없어야 하며 '동기적인 함수'여야 한다.


### Redux Toolkit의 createAsyncThunk 사용하기 (추천 방식)
- Redux Toolkit에서는 createAsyncThunk를 제공해서 비동기 처리를 간단하게 처리 가능.
- npm install @reduxjs/toolkit react-redux

#### 1) slice.js (슬라이스 생성)
```jsx
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
```

#### 2) store.js (스토어 설정)
```jsx
import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './slice';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
```

#### 3) component.js(React에서 사용)
```jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './slice';

const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default DataComponent;
```

