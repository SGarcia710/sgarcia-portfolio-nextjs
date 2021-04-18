import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FONTS } from '../constants';

const Container = styled.div`
  max-width: 1024px;
  display: flex;
  height: 400px;
  margin-bottom: 30px;
`;

const FeaturedPost = styled.div`
  height: 100%;
  width: calc(100% / 3);
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
    z-index: 99;
  }
`;

const Image = styled(motion.img)`
  z-index: 0;
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  filter: grayscale(30%) brightness(50%);
`;

const InfoContainer = styled.div`
  height: 80%;
  width: 85%;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  padding-bottom: 16px;
  padding-left: 12px;
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  line-height: 1.3;
  font-family: ${FONTS.plusJakarta.extraBold};
`;

const FeaturedPosts = (props: { posts: Post[] }) => {
  return (
    <Container>
      {React.Children.toArray(
        props.posts.map(({ id, featuredImage, title, slug }) => (
          <Link href={`/blog/${slug}`}>
            <FeaturedPost>
              <Image layoutId={id} src={featuredImage} alt={title} />
              <InfoContainer>
                <Title>{title}</Title>
              </InfoContainer>
            </FeaturedPost>
          </Link>
        ))
      )}
    </Container>
  );
};

export default FeaturedPosts;
