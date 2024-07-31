import React, { useContext } from "react";
import { Context } from "../container/Context";

function Display() {
  const { switches, innerText } = useContext(Context);

  return (
    <div id="display" className="display">
      <p>{!switches.powerCheck ? "No power!" : innerText}</p>
    </div>
  );
}
export default Display;
