import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavMenu({ title, address }) {
  const activeNav = ({ isActive }) => {
    return {
      color: isActive ? "#13a8be" : "#000000",
      textDecoration: isActive ? "none" : "none",
    };
  };

  return (
    <>
      <Container>
        <NavLink to={address} style={activeNav}>
          <Wrapper>
            <Title>{title}</Title>
          </Wrapper>
        </NavLink>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 8px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 15px;
`;
