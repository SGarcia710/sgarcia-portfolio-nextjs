import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FONTS } from '../constants';
import NETWORKS from '@/constants/networks';

const Container = styled.div`
  width: 100%;
  padding: 28px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.p<{
  fontSize?: number;
  fontFamily?: string;
}>`
  color: white;
  opacity: 0.7;
  font-size: 18px;
  font-family: ${(props) =>
    !!props.fontFamily ? props.fontFamily : FONTS.plusJakarta.regular};
  font-size: ${(props) =>
    !!props.fontSize ? `${props.fontSize}px` : 'inherit'};
`;

const Networks = styled.div`
  margin: 8px 0;
`;

const glow = keyframes`
  0% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;
const glowReverse = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.7;
  }
`;

const Network = styled.a`
  color: white;
  opacity: 0.7;
  margin: 0 6px;
  animation: ${glowReverse} 0.7s ease;
  svg {
    font-size: 24px;
  }

  &:hover {
    animation: ${glow} 0.7s ease forwards;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Text>Find me on</Text>

      <Networks>
        {React.Children.toArray(
          NETWORKS.map((network) => (
            <Network href={network.link}>{network.icon}</Network>
          ))
        )}
      </Networks>
      <Text fontSize={12} fontFamily={FONTS.plusJakarta.light}>
        Made with ❤ in Colombia
      </Text>
    </Container>
  );
};

export default Footer;
