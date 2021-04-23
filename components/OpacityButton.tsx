import { FONTS } from '@/constants';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  padding: 18px 38px;
  border-radius: 50px;
  cursor: pointer;
  transition: 650ms;
  border: 1px solid white;
  p {
    color: #222323;
    white-space: nowrap;
    margin: 0;
    line-height: 24px;
    letter-spacing: 0.03em;
    font-size: 14px;
  }

  &:hover {
    background-color: #222323;
    p {
      color: white;
    }
  }
`;

interface OpacityButtonProps {
  label: string;
  callback: () => void;
}

const OpacityButton = (props: OpacityButtonProps) => {
  return (
    <Container onClick={props.callback}>
      <p>{props.label}</p>
    </Container>
  );
};

export default OpacityButton;
