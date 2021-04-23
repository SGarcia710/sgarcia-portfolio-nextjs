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
      <Image src="/images/Memoji8.png" />
      <Title>404</Title>
      <Headline>
        Whoops, this is embarassing.
        <br /> Looks like the page you were looking for <br /> wasn't found.
      </Headline>
      <OpacityButton callback={() => router.push('/')} label="Return home" />
    </Container>
  );
};

export default NotFound;
