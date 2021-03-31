import React from 'react';
import styled from 'styled-components';

import { FONTS } from '../constants';

const Container = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;
  padding: 0 40px;
`;

const LogoContainer = styled.div`
  p {
    font-size: 18px;
    font-family: ${FONTS.plusJakarta.bold};
    cursor: pointer;
  }
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  a {
    color: white;
    font-size: 14px;
    margin: 0 18px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <p>sebastián garcía</p>
      </LogoContainer>

      <NavBar>
        <a href="#">Blog</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </NavBar>
    </Container>
  );
};

export default Header;
