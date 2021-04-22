import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 28px;
  height: 28px;
  display: none;
  @media (max-width: 813px) {
    display: initial;
  }
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#ffffff"
    strokeLinecap="round"
    {...props}
  />
);

const MenuButton = ({ toggleOpen }: { toggleOpen: () => void }) => {
  return (
    <Container onClick={toggleOpen}>
      <svg width="28" height="28" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </Container>
  );
};

export default MenuButton;
