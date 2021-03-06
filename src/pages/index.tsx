import OpacityButton from '@/components/OpacityButton';
import styled from 'styled-components';
import { COLORS } from '@/constants';
import {
  YTransition,
  YTRANSITION_CONFIG,
} from '@/components/AnimationsWrappers/YTransition';
import CircleAvatar from '@/components/CircleAvatar';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Greeting = styled.h3`
  font-size: 28px;
  margin-bottom: 32px;
  color: white;
`;

const Headline = styled.h1`
  font-size: 60px;
  text-align: center;
  line-height: 1.11;
  margin-bottom: 48px;
  color: white;

  @media (max-width: 425px),
    (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
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
  color: white;

  @media (max-width: 425px),
    (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    font-size: 18px;
  }
  strong {
  }
`;

export default function Home() {
  return (
    <Container>
      <YTransition {...YTRANSITION_CONFIG(0.4)}>
        <CircleAvatar image="/images/Memoji3.png" />
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
          label="CONNECT WITH ME"
          callback={() => console.log('Oprimiste contactarme')}
        />
      </YTransition>
    </Container>
  );
}
