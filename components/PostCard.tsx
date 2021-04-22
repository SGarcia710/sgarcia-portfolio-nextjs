import React, { useCallback } from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import { motion } from 'framer-motion';
import { COLORS, FONTS, IMAGE_FORMATS } from '../constants';
import Link from 'next/link';
import { getResizedURL } from '../utils';
import ClampLines from 'react-clamp-lines';

const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  color: white;

  @media (max-width: 812px) {
    width: 100%;
  }
`;
const PostDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
`;
const PostDate = styled.p`
  color: #ccc6c6;
  font-size: 12px;
  margin-bottom: 0;
`;
const PostCategory = styled.p`
  text-transform: capitalize;
  font-size: 12px;
  margin-bottom: 0;
`;
const PostImage = styled(motion.img)`
  width: 100%;
  margin-bottom: 12px;
  height: 170px;
  object-fit: cover;
`;
const PostTitle = styled.h4`
  font-family: ${FONTS.plusJakarta.bold};
  font-size: 28px;
  line-height: 1.1;
  margin-bottom: 12px;
`;
const PostDescription = styled(ClampLines)`
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.2;
  p {
    margin-bottom: 0;
  }
`;
const GoToPostButton = styled.a`
  color: ${COLORS.headingColor};
  font-size: 14px;
  cursor: pointer;
`;

const PostCard = ({ post }: { post: Post }) => {
  const { createdAt, title, featuredImage, id, type, description, slug } = post;

  const getImageURL = getResizedURL(featuredImage, {
    scale: true,
    quality: 'auto',
    width: 300,
    to: IMAGE_FORMATS.webp,
  });

  return (
    <Post>
      <PostDetailRow>
        <PostDate>{DateTime.fromISO(createdAt).toLocaleString()}</PostDate>
        <PostCategory>{type}</PostCategory>
      </PostDetailRow>
      <PostImage src={getImageURL} alt={title} />
      <PostTitle>{title}</PostTitle>
      <PostDescription
        text={description}
        id={id}
        lines={3}
        ellipsis="..."
        buttons={false}
        innerElement="p"
      />
      <Link href={`/blog/${slug}`}>
        <GoToPostButton>Leer más</GoToPostButton>
      </Link>
    </Post>
  );
};

export default PostCard;
