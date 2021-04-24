import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';
import { LINKS } from '@/constants';
import { useRouter } from 'next/router';
import SoonTag from './SoonTag';

const NavigationOverlay = styled.div`
  height: 100vh;
  position: absolute;
  overflow: hidden;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 40;
`;

const Links = styled.div`
  width: 100%;
  background-color: #e7b996;
  top: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow: visible;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;

  padding-bottom: 32px;
  padding-top: 32px;
  padding-left: 45px;
  a {
    color: #222323;
    font-size: 14px;
    letter-spacing: 0.5px;
  }
`;

interface MobileNavigationProps {
  isMenuOpen: boolean;
  toggleMenu: (newState: boolean) => void;
}

const MobileNavigation = ({
  isMenuOpen,
  toggleMenu,
}: MobileNavigationProps) => {
  const router = useRouter();
  useEffect(() => {
    if (isMenuOpen) {
      toggleMenu(false);
    }
  }, [router.pathname]);

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <NavigationOverlay onClick={() => toggleMenu(!isMenuOpen)}>
          <motion.div
            initial={{ y: -420 }}
            animate={{
              y: 0,
            }}
            exit={{
              y: -420,
            }}
          >
            <Links>
              {React.Children.toArray(
                Object.values(LINKS).map((link) => {
                  const isForSoon = [
                    LINKS.contact.url,
                    LINKS.portfolio.url,
                  ].includes(link.url);

                  return (
                    <LinkContainer>
                      <Link href={link.url}>{link.title}</Link>
                      {!!isForSoon && <SoonTag dark />}
                    </LinkContainer>
                  );
                })
              )}
            </Links>
          </motion.div>
        </NavigationOverlay>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
