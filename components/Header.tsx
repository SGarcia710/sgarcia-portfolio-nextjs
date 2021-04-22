import React from 'react';
import styled from 'styled-components';

import { COLORS, FONTS } from '../constants';
import Link from 'next/link';

const Container = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
`;

const LogoContainer = styled.div`
  p {
    font-family: ${FONTS.plusJakarta.bold};
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
  }
`;

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 100%;
  a {
    font-size: 14px;
    margin: 0 18px;
    color: ${COLORS.transparentText};
    padding: 1rem 1.25rem;
    font-size: 1.3rem;
    font-weight: 400;
    border-radius: 0.35rem;
    &:hover {
      background-color: ${COLORS.lightBackground};
      color: white;
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
          <p>🍕 sebastián garcía</p>
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
