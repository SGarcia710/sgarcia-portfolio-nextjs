import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { IMAGES } from '../../constants';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled(motion.img)`
  height: 320px;
  width: 65%;
  object-fit: cover;

  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  cursor: pointer;
`;

const Posts = () => {
  return (
    <Container>
      {React.Children.toArray(
        IMAGES.map((image, index) => (
          <Link href={`/blog/${index}`}>
            <Image layoutId={index.toString()} src={image} alt={image} />
          </Link>
        ))
      )}
    </Container>
  );
};

export default Posts;
