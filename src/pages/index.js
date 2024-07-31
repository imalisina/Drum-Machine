import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const sounds = [
  {
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3',
    id: 'Heater-1',
    key: 'Q',
  },
  {
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3',
    id: 'Heater-2',
    key: 'W',
  },
  {
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3',
    id: 'Heater-3',
    key: 'E',
  },
  {
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3',
    id: 'Heater-4',
    key: 'A',
  },
  {
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3',
    id: 'Heater-6',
    key: 'S',
  },
  {
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3',
    id: 'Dsc_Oh',
    key: 'D',
  },
  {
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3',
    id: 'Kick_n_Hat',
    key: 'Z',
  },
  {
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3',
    id: 'RP4_KICK_1',
    key: 'X',
  },
  {
    src: 'https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3',
    id: 'Cev_H2',
    key: 'C',
  },
];

export default function Home() {
  const [display, setDisplay] = useState('');

  const handleKeyPress = (e) => {
    const sound = getSoundByKey(e.key.toUpperCase());
    if (sound) {
      playSound(sound.src, sound.id);
    }
  };

  const getSoundByKey = (key) => {
    return sounds.find((sound) => sound.key === key);
  };

  const playSound = (src, id) => {
    const audio = new Audio(src);
    audio.currentTime = 0;
    audio.play();
    setDisplay(id);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div id="drum-machine" className={styles.drumMachine}>
      <div id="display" className={styles.display}>
        {display}
      </div>
      <div className={styles.pads}>
        {sounds.map((sound) => (
          <div
            key={sound.key}
            id={sound.id}
            className={`${styles.drumPad} ${styles[sound.id]}`}
            onClick={() => playSound(sound.src, sound.id)}
          >
            {sound.key}
          </div>
        ))}
      </div>
    </div>
  );
}
