# 할일 목록

```jsx
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault(); 
    if (!todo) {
      return;
    }
    setTodos((currentTodos) => [todo, ...currentTodos]);
    setTodo("");
  };

  return (
    <div className="App">
      <h1>할일 목록({todos.length})</h1>
      <form onSubmit={onSubmit}> 
        <input 
          value={todo}
          onChange={onChange}
          type="text" 
          placeholder="할일을 입력하세요"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {todos.map((item, index) => (
        <li key={index}>{item}</li>        
      ))}
    </div>
  );
}

export default App;
```
