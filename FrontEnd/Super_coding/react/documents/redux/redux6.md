## Redux 비동기 처리


### 리덕스 비동기 처리
- 리듀서는 반드시 '순수 함수'여야 하고 '사이드 이펙트'가 없어야 하며 '동기적인 함수'여야 한다.

### 1. Redux Thunk 사용하기 (기본 Redux 방식)
- Redux Thunk는 Redux의 dispatch에서 함수를 반환할 수 있도록 해주는 미들웨어.
- 이를 이용하면 비동기 요청을 관리할 수 있음.
- npm install redux-thunk

#### 1) actino.js(액션 생성)
```jsx
export const fetchDataRequest = () => ({ type: 'FETCH_DATA_REQUEST' });
export const fetchDataSuccess = (data) => ({ type: 'FETCH_DATA_SUCCESS', payload: data });
export const fetchDataFailure = (error) => ({ type: 'FETCH_DATA_FAILURE', payload: error });

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};
```

#### 2) reducer.js(리듀서)
```jsx
const initialState = {
  data: [],
  loading: false,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: false, data: action.payload };
    case 'FETCH_DATA_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
```

#### 3) store.js (스토어 설정)
```jsx
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducer';

const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;

```

#### 4) component.js(React에서 사용)
```jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './actions';

const DataComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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



### 2. Redux Toolkit의 createAsyncThunk 사용하기 (추천 방식)
- Redux Toolkit에서는 createAsyncThunk를 제공해서 비동기 처리를 더 간단하게 할 수 있어.
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
