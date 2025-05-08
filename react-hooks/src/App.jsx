import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Usestate from "./pages/usestate";
import Useeffect from "./pages/useeffect";

function App() {
  return (
    <>
      <Usestate />
      <br />
      <Useeffect />
    </>
  );
}

export default App;
