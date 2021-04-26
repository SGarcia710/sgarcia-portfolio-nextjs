import {
  YTransition,
  YTRANSITION_CONFIG,
} from '@/components/AnimationsWrappers/YTransition';
import { COLORS, FONTS } from '@/constants';
import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 818px) {
  }
`;
const Hero = styled.div`
  display: flex;
  width: 1024px;
  margin-bottom: 120px;

  @media (max-width: 818px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 60px;
  }
`;
const Photo = styled.img`
  width: 50%;
  object-fit: contain;

  @media (max-width: 818px) {
    width: 100%;
  }
`;
const Bio = styled.div`
  width: 50%;
  display: flex;
  align-items: flex-end;

  @media (max-width: 818px) {
    width: 100%;
    /* background-color: red; */
    justify-content: center;
  }
`;

const Column = styled.div`
  flex-direction: column;
  display: flex;
  background-color: ${COLORS.background2};
  margin-left: -30px;
  margin-bottom: -36px;
  padding-top: 30px;
  padding-left: 45px;
  color: white;
  @media (max-width: 818px) {
    width: 85%;
    padding: 0;
    margin: 0;
    margin-top: -30px;
    padding: 10px 0 0 20px;
  }
`;
const Text = styled.p`
  font-size: 2.2rem;
  line-height: 1.6;
  font-family: ${FONTS.plusJakarta.bold};

  @media (max-width: 818px) {
    font-size: 1.8rem;
  }
`;
const Hello = styled(Text)`
  margin-bottom: 20px;
`;
const ShortDescription = styled(Text)``;

const ColoredText = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

const Description = styled.div`
  width: 1024px;

  display: flex;
  justify-content: flex-end;

  p {
    width: 50%;
    font-size: 0.75rem;
    color: white;
  }
  @media (max-width: 818px) {
    width: 100%;
    p {
      width: 100%;
      padding: 0 16px;
      font-size: 0.82rem;
    }
  }
`;

const AboutMe: NextPage = () => {
  return (
    <Container>
      <YTransition {...YTRANSITION_CONFIG(0.4)}>
        <Hero>
          <Photo src="/images/avatar.jpg" />
          <Bio>
            <Column>
              <Hello>Hello there!</Hello>
              <ShortDescription>
                My name is Sebastián <br /> and I{' '}
                <ColoredText color={COLORS.headingColor}>develop</ColoredText>{' '}
                and <br />
                <ColoredText color={COLORS.headingColor}>
                  teach
                </ColoredText>{' '}
                <i>
                  (most of the
                  <br /> time)
                </i>
                .
              </ShortDescription>
            </Column>
          </Bio>
        </Hero>
      </YTransition>

      <YTransition {...YTRANSITION_CONFIG(0.6)}>
        <Description>
          <p>
            My name is Sebastián. I am from Cali, Colombia. Currently living in
            Chía, Colombia. I am a Semi Senior Frontend Developer experienced
            with Reactjs-related technologies. I am a person that is feet
            committed to all my responsibilities, and I'm always looking for
            experiences that help me grow and form as a professional.
          </p>
        </Description>
      </YTransition>
    </Container>
  );
};

export default AboutMe;
