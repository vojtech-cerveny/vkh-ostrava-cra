import React from "react";
import Typing from "react-typing-animation";

import { DarkSection, Row, Word, Cell, Column, Container } from "../css/style";

const strings = {
  v: ["Vysokoškolské", "Vynikající", "Výjimečné"],
  k: ["Katolické", "Kapacitní", "Kované"],
  h: ["Hnutí", "Hovádka", "Haluz"]
};

export function VKHinString() {
  const speed = 20;
  const delay = 3500;
  const hideCursor = true;
  const style = {
    color: "red"
  };
  return (
    <DarkSection>
      <Container>
        <Row>
          <Column xs="12" md="4">
            <Word>
              <Typing
                style={Cell}
                loop={true}
                speed={speed}
                hideCursor={hideCursor}
              >
                {strings.v.map(word => {
                  const bold =
                    word === "Vysokoškolské" ? (
                      <span style={style}>{word}</span>
                    ) : (
                      <span>{word}</span>
                    );
                  return (
                    <div>
                      <Typing.Backspace count={1} />
                      {bold}
                      <Typing.Backspace
                        count={word.length + 1}
                        delay={delay - 2 * (word.length + 4) * speed}
                      />
                    </div>
                  );
                })}
              </Typing>
            </Word>
          </Column>
          <Column xs="12" md="4">
            <Word>
              <Typing
                style={Cell}
                loop={true}
                speed={speed}
                hideCursor={hideCursor}
              >
                {strings.k.map(word => {
                  const bold =
                    word === "Katolické" ? (
                      <span style={style}>{word}</span>
                    ) : (
                      <span>{word}</span>
                    );
                  return (
                    <div>
                      <Typing.Backspace count={1} />
                      {bold}
                      <Typing.Backspace
                        count={word.length + 1}
                        delay={delay - 2 * (word.length + 3) * speed}
                      />
                    </div>
                  );
                })}
              </Typing>
            </Word>
          </Column>
          <Column xs="12" md="4">
            <Word>
              <Typing
                style={Cell}
                loop={true}
                speed={speed}
                hideCursor={hideCursor}
              >
                {strings.h.map(word => {
                  const bold =
                    word === "Hnutí" ? (
                      <span style={style}>{word}</span>
                    ) : (
                      <span>{word}</span>
                    );
                  return (
                    <div>
                      <Typing.Backspace count={1} />
                      {bold}
                      <Typing.Backspace
                        count={word.length + 1}
                        delay={delay - 2 * (word.length + 3) * speed}
                      />
                    </div>
                  );
                })}
              </Typing>
            </Word>
          </Column>
        </Row>
      </Container>
    </DarkSection>
  );
}
