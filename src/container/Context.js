import React, { useState } from "react";

// Create Context
const Context = React.createContext();

function ContextProvider({ children }) {
  // Change display text
  const [innerText, setInnerText] = useState("Powered up!");

  // Set app volume
  const [value, setValue] = useState(0.3);

  // Get true/false boolean from switch
  const [switches, setSwitches] = useState({
    powerCheck: true,
    soundsCheck: false,
  });

  // Handle the change of the power/sounds switches
  const handleChange = (event) => {
    setSwitches({ ...switches, [event.target.name]: event.target.checked });
    setInnerText("Powered up!");
  };

  // Handle the change of volume change on the slider
  const handleChangeVolume = (event, newValue) => {
    setValue(newValue);
    setInnerText(`Volume: ${Math.round(newValue * 100)}`);
  };

  return (
    <Context.Provider
      value={{
        innerText,
        setInnerText,
        value,
        setValue,
        switches,
        setSwitches,
        handleChange,
        handleChangeVolume,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
