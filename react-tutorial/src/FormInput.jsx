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

    setTodos(prevTodo=>[
      ...prevTodos,
    ])
  };

  return <div></div>;
}
