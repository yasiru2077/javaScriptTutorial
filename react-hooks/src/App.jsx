import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Usestate from "./pages/usestate";
import Useeffect from "./pages/useeffect";
import Usecontext from "./pages/usecontext";
import Usereducer from "./pages/usereducer";

function App() {
  return (
    <>
      <Usestate />
      <br />
      <Useeffect />
      <br />
      <Usecontext />
      <br />
      <Usereducer />
    </>
  );
}

export default App;
