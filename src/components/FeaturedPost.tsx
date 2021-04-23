import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { COLORS, FONTS, IMAGE_FORMATS } from '@/constants';
import Link from 'next/link';
import { getResizedURL } from '../utils';
import PostBy from './PostBy';
import PostCategory from './PostCategory';
import RainbowSeparator from './RainbowSeparator';

const Container = styled.div`
  display: flex;
  width: 1024px;
  margin-bottom: 60px;
  @media (max-width: 818px) {
    width: 100%;
    flex-direction: column;
    margin-bottom: 50px;
    border-bottom: 3px solid ${COLORS.borderColor};
  }
  @media (max-width: 425px) {
    margin-bottom: 25px;
  }
`;
const Image = styled(motion.img)`
  width: 55%;
  max-width: 55%;
  height: 330px;
  object-fit: cover;
  border-radius: 24px;
  cursor: pointer;

  @media (max-width: 818px) {
    width: 100%;
    max-width: initial;
    margin-bottom: 16px;
  }
  @media (max-width: 425px) {
    height: 230px;
  }
`;

const Info = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  @media (max-width: 818px) {
    width: 100%;
    margin-left: 0;
    margin-bottom: 15px;
  }
  @media (max-width: 425px) {
  }
`;

const Title = styled.h2`
  font-family: ${FONTS.plusJakarta.bold};
  font-size: 32px;
  line-height: 1.3;
  margin-bottom: 12px;
  color: white;
  max-width: 95%;
  cursor: pointer;
  @media (max-width: 818px) {
    max-width: 100%;
  }
  @media (max-width: 425px) {
    font-size: 26px;
  }
`;
const Description = styled.p`
  line-height: 2;
  letter-spacing: 0.2px;
  font-size: 14px;
  margin-bottom: 20px;
  max-width: 90%;
  color: rgba(255, 255, 255, 0.7);

  a {
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
  @media (max-width: 818px) {
    max-width: 98%;
  }
`;
const Categories = styled.div`
  display: flex;
`;

const FeaturedPost = ({ post }: { post: Post }) => {
  const {
    createdAt,
    title,
    featuredImage,
    id,
    type,
    description,
    slug,
    categories,
  } = post;

  const getImageURL = getResizedURL(featuredImage, {
    scale: true,
    quality: 'auto',
    width: 500,
    to: IMAGE_FORMATS.webp,
  });

  const _description =
    description.length > 130
      ? description.slice(0, 130).concat('...  ')
      : description;

  return (
    <Container>
      <Link href={`/blog/${slug}`}>
        <Image src={getImageURL} alt={title} />
      </Link>

      <Info>
        <Categories>
          <PostCategory label="El más reciente" />
          <PostCategory uid={categories[0].uid} label={categories[0].title} />
        </Categories>

        <Link href={`/blog/${slug}`}>
          <Title>{title}</Title>
        </Link>
        <Description>
          {_description}
          <Link href={`/blog/${slug}`}>→</Link>
        </Description>
        <PostBy date={post.createdAt} />
      </Info>
    </Container>
  );
};

export default FeaturedPost;
