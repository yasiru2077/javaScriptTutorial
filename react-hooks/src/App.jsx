import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Usestate from "./pages/usestate";
import Useeffect from "./pages/useeffect";
import Usecontext from "./pages/usecontext";
import UseReducer from "./pages/useReducer";
import UseRef from "./pages/useRef";

function App() {
  return (
    <>
      <Usestate />
      <br />
      <Useeffect />
      <br />
      <Usecontext />
      <br />
      <UseReducer />
      <br />
      <UseRef/>
    </>
  );
}

export default App;
