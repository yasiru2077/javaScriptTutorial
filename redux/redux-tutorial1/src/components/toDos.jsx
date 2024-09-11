import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { updateTodo } from "../features/todo/todoSlice";

function ToDos() {
  const todos = useSelector((state) => state.todos);
 
  const [buttonFuntion, setButtonFuntion] = useState(false);
  console.log(buttonFuntion);
  

  const dispatch = useDispatch();
  // const buttonChanges = () => {}

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p className={buttonFuntion ? "view":""}>{todo.text}</p>
          <input type="text" className={buttonFuntion ? "hidden-edit":""} value={todo.text}/>
          <button onClick={() => dispatch(removeTodo(todo.id))}>remove</button>
          <button
            className={buttonFuntion ? "update":""}
            onClick={() => {
              dispatch(updateTodo(todo.id));
              setButtonFuntion(true);
            }}
          >
            update
          </button>
        </div>
      ))}
    </div>
  );
}

export default ToDos;
