import React, { useState } from "react";
import { useForm } from "react-hook-form";


// function ToDoList() {
//   const [todo, setTodo] = useState('');
//   const [toDoError, setToDoError] = useState('');
//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };
//   const onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (todo.length < 10) {
//       return setToDoError('To do should be longer');
//     }
//     console.log("Submit");
//   };
//
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input onChange={onChange} value={todo} placeholder="Write a to do" />
//         <button>Add</button>
//         {toDoError !== "" ? toDoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <input {...register("email")} placeholder="Email" />
      <input {...register("first Name")} placeholder="First Name" />
      <input {...register("last name")} placeholder="Last name" />
      <input {...register("username")} placeholder="Username" />
      <input {...register("password")} placeholder="Password" />
      <input {...register("password1")} placeholder="Password1" />
      <button>Add</button>
    </div>
  )
}

export default ToDoList;
