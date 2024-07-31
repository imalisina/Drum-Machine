import React, { useContext } from "react";
import { Context } from "../container/Context";

import { FaDrum } from "react-icons/fa";
import { CgPiano } from "react-icons/cg";

function Title() {
  const { switches } = useContext(Context);

  return (
    <div className="title">
      {switches.soundsCheck ? <CgPiano size={32} /> : <FaDrum size={32} />}
      <h1>{switches.soundsCheck ? "Piano" : "Drum"} Machine</h1>
    </div>
  );
}

export default Title;
