import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import drumSounds from '../../public/sounds/drums/soundsArr';
import pianoSounds from '../../public/sounds/piano/pianoArr';

const keyBindings = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

export default function Home() {
  const [display, setDisplay] = useState('');
  const [isDrumMode, setIsDrumMode] = useState(true);

  const handleKeyPress = (e) => {
    const sound = getSoundByKey(e.key.toUpperCase());
    if (sound) {
      playSound(sound.src, sound.id);
    }
  };

  const getSoundByKey = (key) => {
    const sounds = isDrumMode ? drumSounds : pianoSounds;
    return sounds.find((sound, index) => keyBindings[index] === key);
  };

  const playSound = (src, id) => {
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.play();
    setDisplay(id);
  };

  const toggleMode = () => {
    setIsDrumMode(!isDrumMode);
    setDisplay('');
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isDrumMode]);

  const sounds = isDrumMode ? drumSounds : pianoSounds;

  return (
    <div id="drum-machine" className={styles.drumMachine}>
      <div id="display" className={styles.display}>
        {display}
      </div>
      <button onClick={toggleMode} className={styles.toggleButton}>
        Switch to {isDrumMode ? 'Piano' : 'Drums'}
      </button>
      <div className={styles.pads}>
        {sounds.map((sound, index) => (
          <div
            key={keyBindings[index]}
            id={sound.id}
            className={`drum-pad ${styles.drumPad}`}
            onClick={() => playSound(sound.src, sound.id)}
          >
            {keyBindings[index]}
          </div>
        ))}
      </div>
    </div>
  );
}
