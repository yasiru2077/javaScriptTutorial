import React, { createContext, useContext, useState } from "react";
import ChildToggle from "./childToggle";
import ChildDisplay from "./childDisplay";

export const GlobalStateContext = createContext(null);
function Usecontext() {
  const [toggle, setToggle] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ toggle, setToggle }}>
      <div>
        <h3>parent component</h3>
        <ChildToggle />
        <ChildDisplay />
        <></>
      </div>
    </GlobalStateContext.Provider>
  );
}

export default Usecontext;
