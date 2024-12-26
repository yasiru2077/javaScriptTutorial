import React, { useState } from "react";

function FormInput() {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 0,
  });

  //This is the wrong way to handle a usestate object dont do this
  //   const updateWrong = () => {
  //     user.name = "john";
  //   };

  //   //Proper way
  //   const correctWay = () => {
  //     setUser({
  //       ...user,
  //       name: "John",
  //     });
  //   };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  console.log(user.name);
  console.log(user.age);
  console.log(user.email);

  return (
    <div>
      <form>
        <input
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <input
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter email"
        />
        <input
          name="age"
          type="number"
          value={user.age}
          onChange={handleChange}
        />
      </form>
      <br />
      <FormInputArray />
    </div>
  );
}

export default FormInput;

export function FormInputArray() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: input, completed: false },
    ]);
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={addTodo}>+</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
