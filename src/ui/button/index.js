import styled from "styled-components";

export default function ButtonMain({ type, children, bcg }) {
  return (
    <>
      <Button bcg={bcg} type={type}>
        {children}
      </Button>
    </>
  );
}

const Button = styled.button`
  background-color: ${({ bcg }) => bcg};
  padding: 10px 15px;
  color: ${({ clr }) => clr};
`;
