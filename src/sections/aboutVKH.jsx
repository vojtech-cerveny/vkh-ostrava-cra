import React from "react";
import {
  Paragraph,
  H2,
  LightSection,
  Row,
  Cell,
  Image,
  Container
} from "../css/style";
import Fade from "react-reveal/Fade";

import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";

export function AboutVKH() {
  return (
    <LightSection>
      <Container>
        <H2>About VKH</H2>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In rutrum.
          Mauris suscipit, ligula sit amet pharetra semper, nibh ante cursus
          purus, vel sagittis velit mauris vel metus. Nullam sit amet magna in
          magna gravida vehicula. Fusce tellus. Nullam lectus justo, vulputate
          eget mollis sed, tempor sed magna. Phasellus enim erat, vestibulum
          vel, aliquam a, posuere eu, velit. Nam sed tellus id magna elementum
          tincidunt. Curabitur bibendum justo non orci. Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit. Aenean placerat. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          hymenaeos. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos hymenaeos. Integer tempor. Praesent id justo in
          neque elementum ultrices. Aenean fermentum risus id tortor. In
          convallis.
        </Paragraph>
        <Row>
          <Cell>
            <Fade left>
              <Image src={one} alt={"something"} />
            </Fade>
          </Cell>
          <Cell>
            <Paragraph>Something interesting to say</Paragraph>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Paragraph>Something interesting to say</Paragraph>
          </Cell>
          <Cell>
            <Fade right>
              <Image src={two} alt={"something"} />
            </Fade>
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Fade left>
              <Image src={three} alt={"something"} />
            </Fade>
          </Cell>
          <Cell>
            <Paragraph>Something interesting to say</Paragraph>
          </Cell>
        </Row>
      </Container>
    </LightSection>
  );
}
