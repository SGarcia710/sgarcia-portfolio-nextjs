import React from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import { motion } from 'framer-motion';
import { FONTS } from '../constants';
import Link from 'next/link';

const Post = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: white;
`;
const PostDetailRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 12px;
`;
const PostDate = styled.p`
  color: #ccc6c6;
`;
const PostCategory = styled.p`
  text-transform: capitalize;
`;
const PostImage = styled(motion.img)`
  width: 100%;
  margin-bottom: 12px;
`;
const PostTitle = styled.div`
  font-family: ${FONTS.plusJakarta.bold};
  font-size: 28px;
  margin-bottom: 12px;
`;
const PostDescription = styled.p`
  margin-bottom: 12px;
  font-size: 14px;
  line-height: 1.2;
`;
const GoToPostButton = styled.p`
  color: #e7b996;
  font-size: 14px;
  cursor: pointer;
`;

const PostCard = ({ post }: { post: Post }) => {
  const { createdAt, title, featuredImage, id, type, description, slug } = post;
  return (
    <Post>
      <PostDetailRow>
        <PostDate>{DateTime.fromISO(createdAt).toLocaleString()}</PostDate>
        <PostCategory>{type}</PostCategory>
      </PostDetailRow>
      <PostImage layoutId={id} src={featuredImage} alt={title} />
      <PostTitle>{title}</PostTitle>
      <PostDescription>{description}</PostDescription>
      <Link href={`/blog/${slug}`}>
        <GoToPostButton>Leer más</GoToPostButton>
      </Link>
    </Post>
  );
};

export default PostCard;
