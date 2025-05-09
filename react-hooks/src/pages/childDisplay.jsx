import React, { useContext, useState } from "react";
import { GlobalStateContext } from "./usecontext";

function ChildDisplay() {
  const { toggle } = useContext(GlobalStateContext);

  return (
    <div>
      <p>current states:{toggle ? "on" : "off"}</p>
    </div>
  );
}

export default ChildDisplay;
