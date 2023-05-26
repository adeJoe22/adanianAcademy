import React from "react";
import styled from "styled-components";
import StatementCard from "./StatementCard";

export default function Statement() {
  return (
    <>
      <Container>
        <Wrapper>
          <StatementCard
            tcolor={"#f39712"}
            dcolor={"#008094"}
            bg={"#E1F4F7"}
            title={"Our mission"}
            children={
              "is to support and build 300 impact-driven commercially viable tech companies in Africa by 2025. To do this, we need a huge volume of highly skilled and tested developers."
            }
          />
          <StatementCard
            tcolor={"#13a8be"}
            dcolor={"#b16700"}
            bg={"#ffe1b7"}
            title={"Our vision"}
            children={`Adanian Academy
              Software Developers Training initiative is a strategic partnership
              with leaders in the industry to ensure that our mission is
              achieved expeditiously.`}
          />
        </Wrapper>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 300px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
`;
