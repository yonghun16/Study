import React, { useState } from "react";
import { useForm } from "react-hook-form";


// function ToDoList() {
//   const [todo, setTodo] = useState('');
//   const [toDoError, setToDoError] = useState('');
//
//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;
//     setTodo(value);
//   };
//
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
  const { register, handleSubmit, formState } = useForm();
  const onValied = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValied)}
      >
        <input {...register("email", { required: true })} placeholder="Email" />
        <input {...register("first Name", { required: true })} placeholder="First Name" />
        <input {...register("last name", { required: true })} placeholder="Last name" />
        <input {...register("username", { required: true, minLength: 10 })} placeholder="Username" />
        <input {...register("password", {
          required: true, minLength: {
            value: 5,
            message: "Password is too short"
          }
        })} placeholder="Password" />
        <input {...register("password1", { required: "Password is required", minLength: 5 })} placeholder="Password1" />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ToDoList;

