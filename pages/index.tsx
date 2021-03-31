import OpacityButton from '../components/OpacityButton';
import styled from 'styled-components';
import Header from '../components/Header';

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
  background-color: #e7b996;
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

  margin-bottom: 48px;

  span {
    background-image: url('/images/DisplayLine.svg');
    background-repeat: no-repeat;
    background-position: 50% 100%;
  }
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 40px;
  line-height: 1.4;
  font-size: 20px;
  strong {
  }
`;

export default function Home() {
  return (
    <Container>
      <Avatar>
        <img src="/images/Memoji3.png" alt="Memoji" />
      </Avatar>
      <Greeting>Hey, I'm Sebastián 🤟🏼</Greeting>
      <Headline>
        <span>Building</span> High-Quality <br />
        products and <span>teaching</span> <br />
        how to develop them
      </Headline>
      <Description>
        a <strong>FullStack JavaScript Developer</strong> in Colombia. I
        specialize
        <br /> in Web and Mobile Development.
      </Description>

      <OpacityButton
        label="Connect with me"
        callback={() => console.log('Oprimiste contactarme')}
      />
    </Container>
  );
}
