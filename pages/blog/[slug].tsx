import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import MarkdownRenderer from '../../components/MarkdownRenderers';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;

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

const PostDetail = ({ post }: { post: Post }) => {
  console.log(post);
  return (
    <Container>
      <Image layoutId={post.id} src={post.featuredImage} />
      <MarkdownRenderer content={post.body} />
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://sgarcia-portfolio-strapi.herokuapp.com/posts'
  );
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://sgarcia-portfolio-strapi.herokuapp.com/posts?slug=${params.slug}`
  );
  const post: Post[] = await res.json();

  return {
    props: {
      post: post.shift(),
    },
  };
};

export default PostDetail;
