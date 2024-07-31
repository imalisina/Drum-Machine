import React, { useContext } from "react";
import { Context } from "../container/Context";

import DrumPad from "./DrumPad";
import soundsArr from "../sounds/drums/soundsArr";
import pianoArr from "../sounds/piano/pianoArr";

function ButtonsPad() {
  const { switches } = useContext(Context);
  const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  let array = switches.soundsCheck ? pianoArr : soundsArr;

  return (
    <div className="buttonsPad">
      {array.map((sound, i) => (
        <DrumPad
          src={sound.src}
          key={sound.id}
          id={sound.id}
          keyValue={keys[i]}
        />
      ))}
    </div>
  );
}

export default ButtonsPad;
