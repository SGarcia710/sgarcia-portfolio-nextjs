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
`;

const Image = styled(motion.img)`
  width: 100%;
  border-radius: 24px;
  height: 309px;
  object-fit: cover;
  margin-bottom: 12px;
  cursor: pointer;
`;

const Title = styled.h4`
  font-family: ${FONTS.plusJakarta.bold};
  font-size: 1.3rem;
  line-height: 1.4;
  max-width: 98%;
  color: white;
  margin-bottom: 5px;
  cursor: pointer;
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
      <PostCategory uid={categories[0].uid} label={categories[0].title} />
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
