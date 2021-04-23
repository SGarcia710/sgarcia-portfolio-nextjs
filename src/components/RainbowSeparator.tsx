import { COLORS } from '@/constants';
import React from 'react';
import styled from 'styled-components';

const Container = styled.hr`
  width: 100%;
  height: 1px;
  display: block;
  position: relative;
  border: none;

  &:after,
  &:before {
    content: '';
    position: absolute;

    width: 100%;
    height: 1px;
    bottom: 50%;
    left: 0;
  }

  &:before {
    background: linear-gradient(
      90deg,
      ${COLORS.background} 0%,
      ${COLORS.background} 50%,
      transparent 50%,
      transparent 100%
    );
    background-size: 15px;
    background-position: center;
    z-index: 1;
  }

  &:after {
    transition: opacity 0.3s ease, animation 0.3s ease;

    /* background: linear-gradient(
      to right,
      #62efab 5%,
      #f2ea7d 15%,
      #f2ea7d 25%,
      #ff8797 35%,
      #ff8797 45%,
      #e1a4f4 55%,
      #e1a4f4 65%,
      #82fff4 75%,
      #82fff4 85%,
      #62efab 95%
    ); */
    background: ${COLORS.headingColor};
    background-position: 0%;
    background-size: 200%;
  }
`;

const RainbowSeparator = () => {
  return <Container />;
};

export default RainbowSeparator;
