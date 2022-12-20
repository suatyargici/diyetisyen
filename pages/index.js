import React from "react";
import { Container } from "../components/Container";
import PriceList from "../components/PriceList";
import Slick from "../components/Slick";

const index = () => {
  return (
    <div>
      <Container>
        <Slick />
        <PriceList />
      </Container>
    </div>
  );
};

export default index;
