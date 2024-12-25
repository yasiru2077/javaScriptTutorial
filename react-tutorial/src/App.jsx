import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tutorial from "./Tutorial";
import FormInput from "./FormInput";

function App() {
  return (
    <>
      <Tutorial />
      <br />
      <FormInput />
    </>
  );
}

export default App;
