import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { IMAGES } from '../../constants';

const Container = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 400px;

  object-fit: cover;

  margin-bottom: 24px;
  &:last-child {
    margin-bottom: 0;
  }
  cursor: pointer;
`;

const PostDetail = () => {
  const {
    query: { postId },
  } = useRouter();

  return (
    <Container>
      <Image layoutId={postId.toString()} src={IMAGES[postId as string]} />
    </Container>
  );
};

export default PostDetail;
