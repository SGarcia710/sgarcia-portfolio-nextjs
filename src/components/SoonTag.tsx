import { COLORS } from '@/constants';
import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  height: fit-content;
  width: fit-content;
  font-size: 10px;
  color: white;
  border-radius: 3px;
  padding: 2px 4px;
  margin: 0;
  margin-left: 8px;
`;

const SoonTag = ({ dark }: { dark?: boolean }) => {
  return (
    <Container
      style={{
        backgroundColor: !!dark ? COLORS.background : COLORS.headingColor,
      }}
    >
      Soon
    </Container>
  );
};

export default SoonTag;
