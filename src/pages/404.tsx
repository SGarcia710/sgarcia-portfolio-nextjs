import {
  YTransition,
  YTRANSITION_CONFIG,
} from '@/components/AnimationsWrappers/YTransition';
import OpacityButton from '@/components/OpacityButton';
import { COLORS, FONTS } from '@/constants';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
`;
const Title = styled.h1`
  margin-bottom: 20px;
  color: white;
  font-size: 48px;
  line-height: 55px;
  font-family: ${FONTS.plusJakarta.medium};
  letter-spacing: -0.03em;
`;
const Headline = styled.p`
  color: ${COLORS.darkFontColor};
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 42px;
  letter-spacing: 0.01em;
  text-align: center;
`;
const NotFound: NextPage = () => {
  const router = useRouter();
  return (
    <Container>
      <YTransition {...YTRANSITION_CONFIG(0.2)}>
        <Image src="/images/Memoji8.png" />
      </YTransition>
      <YTransition {...YTRANSITION_CONFIG(0.4)}>
        <Title>404</Title>
      </YTransition>
      <YTransition {...YTRANSITION_CONFIG(0.6)}>
        <Headline>
          Whoops, this is embarassing.
          <br /> Looks like the page you were looking for <br /> wasn't found.
        </Headline>
      </YTransition>
      <YTransition {...YTRANSITION_CONFIG(0.8)}>
        <OpacityButton callback={() => router.push('/')} label="Return home" />
      </YTransition>
    </Container>
  );
};

export default NotFound;
