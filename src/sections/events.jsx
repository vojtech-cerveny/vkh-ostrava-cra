import React from "react";
import { H2, DarkSection, Row, Column, Container } from "../css/style";
import Event from "../components/Event";
export function Events() {
  return (
    <DarkSection>
        <Container>
      <H2>Events</H2>
      <Row>
        <Column xs="12" md="4" lg="4">
        <Event text="Event 0 - Treba Programovani ve skupinach " bg='#B11623' />
        </Column>
        <Column xs="12" md="4" lg="4">
          <Event text="Event 1 - Treba jogurtova koulovacka" bg='#FABE28'  />
        </Column>
        <Column xs="12" md="4" lg="4">
            <Event text="Event 2 - Treba bowling " bg='#59C8D0' />
        </Column>
      </Row>
      </Container>
    </DarkSection>
  );
}
