import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FONTS, IMAGE_FORMATS } from '@/constants';
import Link from 'next/link';
import { getResizedURL } from '@/utils';
import PostCategory from './PostCategory';
import PostBy from './PostBy';

const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 309px;
  &:nth-child(2),
  &:nth-child(5) {
    justify-self: center;
  }
  &:nth-child(3n) {
    justify-self: end;
  }

  @media (max-width: 818px) {
    width: 340px;
    &:nth-child(odd) {
      justify-self: start;
    }
    &:nth-child(even) {
      justify-self: end;
    }
  }
  @media (max-width: 425px),
    (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    margin-bottom: 40px;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Image = styled(motion.img)`
  width: 100%;
  border-radius: 24px;
  height: 309px;
  object-fit: cover;
  margin-bottom: 12px;
  cursor: pointer;

  @media (max-width: 818px) {
    height: 340px;
  }
  @media (max-width: 425px),
    (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    display: none;
  }
`;

const Categories = styled.div`
  display: flex;
`;

const Title = styled.h4`
  font-family: ${FONTS.plusJakarta.bold};
  font-size: 1.3rem;
  line-height: 1.4;
  max-width: 98%;
  color: white;
  margin-bottom: 5px;
  cursor: pointer;
  @media (max-width: 818px) {
  }
  @media (max-width: 425px),
    (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    max-width: 100%;
    font-size: 1.1rem;
  }
`;

const Description = styled.p`
  line-height: 2;
  letter-spacing: 0.2px;
  font-size: 14px;
  margin-bottom: 12px;
  max-width: 90%;
  color: rgba(255, 255, 255, 0.7);

  a {
    margin-top: 10px;
    color: rgba(255, 255, 255, 0.7);
  }
  @media (max-width: 818px) {
  }
  @media (max-width: 425px),
    (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    max-width: 100%;
  }
`;

const PostCard = ({ post }: { post: Post }) => {
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
    quality: 100,
    width: 309,
    to: IMAGE_FORMATS.webp,
  });

  const _description =
    description.length > 72
      ? description.slice(0, 72).concat('...  ')
      : description;

  return (
    <Post>
      <Link href={`/blog/${slug}`}>
        <Image src={getImageURL} alt={title} />
      </Link>
      <Categories>
        {React.Children.toArray(
          categories
            .slice(0, 2)
            .map((category) => (
              <PostCategory uid={category.uid} label={category.title} />
            ))
        )}
      </Categories>
      <Link href={`/blog/${slug}`}>
        <Title>{title}</Title>
      </Link>
      <Description>
        {_description}
        <Link href={`/blog/${slug}`}>→</Link>
      </Description>
      <PostBy date={createdAt} />
    </Post>
  );
};

export default PostCard;
