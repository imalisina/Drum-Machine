import React, { useRef, useEffect, useContext } from "react";
import { Context } from "../container/Context";

function DrumPad({ id, src, keyValue }) {
  const { setInnerText, value, switches } = useContext(Context);
  const audioRef = useRef();

  function handleClick() {
    setInnerText(id);
    play();
  }

  // Use a ref to get the drum pad that was used and play it
  function play() {
    if (audioRef.current) {
      audioRef.current.volume = value;
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      audioRef.current.load();
      // Fixes DOM Exception error that happens when you try to run the test suite for the project (https://developers.google.com/web/updates/2016/03/play-returns-promise)
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {}).catch((err) => console.log(err));
      }
    }
  }

  // Allow users to play sounds by clicking the appropriate key on the keyboard
  function handleKeyDown(e) {
    // Added toUpperCase() to e.key to pass the project's tests, otherwise it is completely unnecessary
    if (e.key.toUpperCase() === keyValue) {
      setInnerText(id);
      // Search for a better solution
      document.getElementById(id).style.background = "#525252";
      setTimeout(() => {
        document.getElementById(id).style.background = "#ca3e47";
      }, 300);
      play();
    }
  }

  useEffect(() => {
    if (switches.powerCheck) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <button
      className="drum-pad"
      id={id}
      onClick={handleClick}
      disabled={!switches.powerCheck}
    >
      {keyValue}
      <audio id={keyValue} src={src} className="clip" ref={audioRef} />
    </button>
  );
}

export default DrumPad;
