import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { FONTS } from '@/constants';
import { isMobile } from '@/utils';

const Container = styled.div`
  max-width: 1024px;
  display: flex;
  height: 400px;
  margin-bottom: 30px;

  @media (max-width: 812px) {
    flex-direction: column;
    height: fit-content;
    width: 100%;
  }
`;

const FeaturedPost = styled.a`
  height: 100%;
  width: calc(1024px / 3);
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
    z-index: 99;
  }
  @media (max-width: 812px) {
    height: 200px;
    width: 100%;
    &:hover {
      transform: initial;
      z-index: 0;
    }
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
  padding: 1rem;

  @media (max-width: 812px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  line-height: 1.3;
  font-family: ${FONTS.plusJakarta.extraBold};

  @media (max-width: 812px) {
    font-size: 2rem;
  }
`;

const FeaturedPosts = (props: { posts: Post[] }) => {
  return (
    <Container>
      {React.Children.toArray(
        props.posts.map(({ id, featuredImage, title, slug }) => {
          const _title =
            !!isMobile && title.length > 60
              ? title.substring(0, 60).concat('...')
              : title;
          return (
            <Link href={`/blog/${slug}`}>
              <FeaturedPost>
                <Image src={featuredImage} alt={title} />
                <InfoContainer>
                  <Title>{_title}</Title>
                </InfoContainer>
              </FeaturedPost>
            </Link>
          );
        })
      )}
    </Container>
  );
};

export default FeaturedPosts;
