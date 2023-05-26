import React, { Suspense } from "react";
import styled from "styled-components";

import CarouselLayout from "../../components/home/carousel/CarouselLayout";
import Statement from "../../components/home/statement";
import Engage from "../../components/home/engage";

const Home = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Suspense fallback={<h1>...Loading</h1>}>
            <CarouselLayout />
            <Statement />
            <Engage />
          </Suspense>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
`;
