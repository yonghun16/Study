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
