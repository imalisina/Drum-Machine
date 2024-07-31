import "../styles.scss";
import React from "react";

import Title from "../components/Title";
import ButtonsPad from "../components/ButtonsPad";
import Display from "../components/Display";
import SliderVolume from "../components/SliderVolume";
import Switches from "../components/Switches";

function App() {
  return (
    <div className="app">
      <div className="panel" id="drum-machine">
        <Title />
        <ButtonsPad />
        <Display />
        <SliderVolume />
        <Switches />
      </div>
    </div>
  );
}

export default App;
