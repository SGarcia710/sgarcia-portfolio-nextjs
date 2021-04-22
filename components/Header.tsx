import React, { useState } from 'react';
import styled from 'styled-components';
import { COLORS, FONTS, LINKS } from '../constants';
import Link from 'next/link';
import { motion, useCycle } from 'framer-motion';
import MenuButton from './MenuButton';
import MobileNavigation from './MobileNavigation';

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  position: relative;

  @media (max-width: 425px) {
    padding: 22px 4%;
  }
`;

const LogoContainer = styled.div`
  a {
    font-family: ${FONTS.plusJakarta.bold};
    cursor: pointer;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 0;
    @media (max-width: 425px) {
      font-size: 1.2rem;
    }
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
    transition: 0.2s;
    &:hover {
      background-color: ${COLORS.lightBackground};
      color: white;
    }
  }

  @media (max-width: 813px) {
    display: none;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsOpen] = useState(false);
  return (
    <Container animate={isMenuOpen ? 'open' : 'closed'}>
      <Link href="/">
        <LogoContainer>
          <a>sebastián garcía</a>
        </LogoContainer>
      </Link>

      <NavBar>
        {React.Children.toArray(
          Object.values(LINKS).map((link) => (
            <Link href={link.url}>{link.title}</Link>
          ))
        )}
      </NavBar>

      <MenuButton toggleOpen={() => setIsOpen(!isMenuOpen)} />
      <MobileNavigation toggleMenu={setIsOpen} isMenuOpen={isMenuOpen} />
    </Container>
  );
};

export default Header;
