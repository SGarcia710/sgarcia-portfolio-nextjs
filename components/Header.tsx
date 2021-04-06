import React from 'react';
import styled from 'styled-components';

import { FONTS } from '../constants';
import Link from 'next/link';

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

  @media (max-width: 414px) {
    display: none;
  }
`;

const Header = () => {
  return (
    <Container>
      <Link href="/">
        <LogoContainer>
          <p>sebastián garcía</p>
        </LogoContainer>
      </Link>

      <NavBar>
        <Link href="/blog">Blog</Link>
        <Link href="#">About</Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link>
      </NavBar>
    </Container>
  );
};

export default Header;
