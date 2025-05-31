import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo } from "../store";

function Home() {
  const [text, setText] = useState("");
  const toDos = useSelector((state) => state.toDos);
  const dispatch = useDispatch();

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addToDo(text));
      setText("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
  };

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            {toDo.text}
            <button onClick={() => handleDelete(toDo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
