import React from 'react';

import { HTMLMotionProps, motion } from 'framer-motion';
import styled from 'styled-components';

export const YTRANSITION_CONFIG: (delay: number) => HTMLMotionProps<'div'> = (
  delay
) => ({
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: {
      opacity: 0,
      y: 15,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
      },
    },
  },
});

export const YTransition = styled(motion.div)``;
