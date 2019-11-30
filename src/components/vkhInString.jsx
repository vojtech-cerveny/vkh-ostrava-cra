import React from "react";
import Typing from "react-typing-animation";

import styles from '../css/vkhinstring.module.css'

const strings = {
  v: ["Vysokoškolské", "Vynikající", "Výjimečné",],
  k: ["Katolické", "Kapacitní", "Kované"],
  h: ["Hnutí", "Hovádka", "Haluz"]
};

export function VKHinString() {
  const speed = 20;
  const delay = 3500;
  const hideCursor = true;
  const style = {
    color: "red"
  }
  return (
    <div className={styles.wordContainer}>
      <Typing className={styles.word} loop={true} speed={speed} hideCursor={hideCursor}>
        {strings.v.map(word => {
        const bold = word === 'Vysokoškolské' ? (<span style={style}>{word}</span>): (<span>{word}</span>)
          return (
            <div>
              {bold}
              <Typing.Backspace count={word.length + 3} delay={delay - (2*(word.length+4)*speed)} />
            </div>
          );
        })}
      </Typing>
      <Typing className={styles.word} loop={true} speed={speed} hideCursor={hideCursor}>
        {strings.k.map(word => {
          const bold = word === 'Katolické' ? (<span style={style}>{word}</span>): (<span>{word}</span>)
          return (
            <div>
              {bold}
              <Typing.Backspace count={word.length + 3} delay={delay - (2*(word.length+3)*speed)} />
            </div>
          );
        })}
      </Typing>
      <Typing className={styles.word} loop={true} speed={speed} hideCursor={hideCursor}>
        {strings.h.map(word => {
          const bold = word === 'Hnutí' ? (<span style={style}>{word}</span>): (<span>{word}</span>)
          return (
            <div>
              {bold}
              <Typing.Backspace count={word.length + 3} delay={delay - (2*(word.length+3)*speed)} />
            </div>
          );
        })}
      </Typing>
    </div>
  );
}
