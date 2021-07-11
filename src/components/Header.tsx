import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Lottie from 'react-lottie';

import MenuButton from './MenuButton';
import { COLORS, FONTS, LINKS } from '@/constants';
import MobileNavigation from './MobileNavigation';
import { useLogoAnimation } from '@/hooks';
import SoonTag from './SoonTag';

const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;
  position: relative;

  @media (max-width: 818px) {
    padding: 22px 16px;
    margin-bottom: 60px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a {
    font-family: ${FONTS.plusJakarta.bold};
    font-size: 1.5rem;
    color: white;
    margin-bottom: 0;
    margin-left: 12px;
    @media (max-width: 425px),
      (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
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

  @media (max-width: 818px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  align-items: center;
  cursor: pointer;
  margin: 0 18px;

  border-radius: 0.35rem;
  transition: 0.2s;
  padding: 1rem 1.25rem;

  a {
    color: ${COLORS.transparentText};
    font-size: 14px;
    font-weight: 400;
  }
  &:hover {
    background-color: ${COLORS.lightBackground};
    a {
      color: white;
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setIsOpen] = useState(false);
  const animation = useLogoAnimation();

  return (
    <Container animate={isMenuOpen ? 'open' : 'closed'}>
      <Link href="/">
        <LogoContainer>
          <Lottie
            width={60}
            height={60}
            options={{
              animationData: animation,
            }}
          />
          <a>sebastián garcía</a>
        </LogoContainer>
      </Link>

      <NavBar>
        {React.Children.toArray(
          Object.values(LINKS).map((link) => {
            const isForSoon = [LINKS.portfolio.url].includes(link.url);

            return (
              <LinkContainer>
                <Link href={link.url}>{link.title}</Link>
                {!!isForSoon && <SoonTag />}
              </LinkContainer>
            );
          })
        )}
      </NavBar>

      <MenuButton toggleOpen={() => setIsOpen(!isMenuOpen)} />
      <MobileNavigation toggleMenu={setIsOpen} isMenuOpen={isMenuOpen} />
    </Container>
  );
};

export default Header;
