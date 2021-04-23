import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';
import { LINKS } from '@/constants';
import { useRouter } from 'next/router';

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
  a {
    width: 100%;
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 45px;
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
                Object.values(LINKS).map((link) => (
                  <Link href={link.url}>{link.title}</Link>
                ))
              )}
            </Links>
          </motion.div>
        </NavigationOverlay>
      )}
    </AnimatePresence>
  );
};

export default MobileNavigation;
