# Route

### router
- router는 URL을 보고 있는 component

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

```

### useParams
- useParams();는 React Router에서 URL 파라미터를 가져올 때 사용하는 코드
- 아래와 같은 라우팅에서 
```jsx
  <Route path="/movie/:id" element={<MovieDetail />} />
```
- 위 경우, URL이 /movie/123이면, useParams()는 { id: '123' }를 반환합니다.
- useParams()로 받은 값은 항상 문자열. 숫자로 쓰려면 parseInt(id, 10)처럼 형변환해야 함.
