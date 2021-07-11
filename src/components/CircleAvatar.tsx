import styled from 'styled-components';

import { COLORS } from '@/constants';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Circle = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  position: absolute;
  opacity: 75%;
  z-index: 1;

  background-color: ${COLORS.headingColor};
`;

const Image = styled.img`
  z-index: 2;
  width: 220px;
  height: 220px;
`;

const CircleAvatar = ({ image }: { image: string }) => {
  return (
    <Container>
      <Circle />
      <Image alt="Memoji" src={image} />
    </Container>
  );
};

export default CircleAvatar;
