import React from "react";
import styled from "styled-components";

export default function Partnership() {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Partners</Title>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  margin-left: 70px;
`;
