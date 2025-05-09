import React, { useContext } from "react";
import { GlobalStateContext } from "./usecontext";

function ChildToggle() {
  const { setToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>current state </button>
    </div>
  );
}

export default ChildToggle;
