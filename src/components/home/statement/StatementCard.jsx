import React from "react";
import styled from "styled-components";

export default function StatementCard({ dcolor, tcolor, bg, title, children }) {
  return (
    <>
      <Container bg={bg}>
        <Wrapper>
          <Title tcolor={tcolor}>{title}</Title>
          <Desc dcolor={dcolor}>{children}</Desc>
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 50%;
  height: 100%;
  background: ${({ bg }) => bg};
  /* border: 1px solid; */
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 36px;
  margin: 10px;
  color: ${({ tcolor }) => tcolor};
`;
const Desc = styled.div`
  width: 400px;
  font-size: 20px;
  text-align: center;
  color: ${({ dcolor }) => dcolor};
`;
