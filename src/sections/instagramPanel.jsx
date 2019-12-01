import React from "react";
import { H2, LightSection, InstaRow, Cell, Container, Column, Image } from "../css/style";
import instagram1 from '../images/instagram1.jpg'
import instagram2 from '../images/instagram2.jpg'
import instagram3 from '../images/instagram3.jpg'
import instagram4 from '../images/instagram4.jpg'
import instagram5 from '../images/instagram5.jpg'
import instagram6 from '../images/instagram6.jpg'

export function InstagramPanel() {
  return (
    <LightSection>
      <Container>
        <H2>Instagram</H2>
        <InstaRow>
          <Column xs="12" md="4"><Cell><Image src={instagram1}/></Cell></Column>
          <Column xs="12" md="4"><Cell><Image src={instagram2}/></Cell></Column>
          <Column xs="12" md="4"><Cell><Image src={instagram3}/></Cell></Column>
        </InstaRow>
        <InstaRow>
          <Column xs="12" md="4"><Cell><Image src={instagram4}/></Cell></Column>
          <Column xs="12" md="4"><Cell><Image src={instagram5}/></Cell></Column>
          <Column xs="12" md="4"><Cell><Image src={instagram6}/></Cell></Column>
        </InstaRow>
      </Container>
    </LightSection>
  );
}
