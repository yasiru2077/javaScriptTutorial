import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Tutorial from "./Tutorial";
import FormInput from "./FormInput";

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      Element:<Layout/>,
      Children:[
        {index:true,Element:<Tutorial/>}
      ]
    }
  ])
  return (


   

    <>
      {/* <Tutorial />
      <br />
      <FormInput /> */}


    </>
  );
}

export default App;
