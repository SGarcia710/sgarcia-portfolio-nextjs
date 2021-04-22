import OpacityButton from '../components/OpacityButton';
import styled from 'styled-components';
import { HTMLMotionProps, motion } from 'framer-motion';
import { COLORS } from '../constants';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Avatar = styled.div`
  width: 170px;
  height: 170px;
  background-color: ${COLORS.headingColor};
  border-radius: calc(170px / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Greeting = styled.h3`
  font-size: 28px;
  margin-bottom: 32px;
`;

const Headline = styled.h1`
  font-size: 60px;
  text-align: center;
  line-height: 1.11;
  margin-bottom: 48px;

  @media (max-width: 414px) {
    font-size: 30px;
  }
  span {
    background-image: url('/images/DisplayLine.svg');
    background-repeat: no-repeat;
    background-position: 50% 100%;
    background-size: contain;
  }
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.4;
  font-size: 20px;

  @media (max-width: 414px) {
    font-size: 18px;
  }
  strong {
  }
`;

const YTRANSITION_CONFIG: (delay: number) => HTMLMotionProps<'div'> = (
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

const YTransition = styled(motion.div)``;

export default function Home() {
  return (
    <Container>
      <YTransition {...YTRANSITION_CONFIG(0.4)}>
        <Avatar>
          <img src="/images/Memoji3.png" alt="Memoji" />
        </Avatar>
      </YTransition>
      <YTransition {...YTRANSITION_CONFIG(0.5)}>
        <Greeting>Hey, I'm Sebastián 🤟🏼</Greeting>
      </YTransition>
      <YTransition {...YTRANSITION_CONFIG(0.6)}>
        <Headline>
          <span>Building</span> High-Quality <br />
          products and <span>teaching</span> <br />
          how to develop them
        </Headline>
      </YTransition>
      <YTransition {...YTRANSITION_CONFIG(0.7)}>
        <Description>
          a <strong>FullStack JavaScript Developer</strong> in Colombia. I
          specialize
          <br /> in Web and Mobile Development.
        </Description>
      </YTransition>

      <YTransition {...YTRANSITION_CONFIG(0.8)}>
        <OpacityButton
          label="Connect with me"
          callback={() => console.log('Oprimiste contactarme')}
        />
      </YTransition>
    </Container>
  );
}
