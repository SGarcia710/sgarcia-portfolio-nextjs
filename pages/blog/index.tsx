import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FeaturedPosts from '../../components/FeaturedPosts';
import PostCard from '../../components/PostCard';
import { GetServerSideProps } from 'next';

const Container = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostsContainer = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
`;

const Posts = (props: { posts: Post[] }) => {
  return (
    <Container>
      <FeaturedPosts posts={props.posts.slice(0, 3)} />
      <PostsContainer>
        {React.Children.toArray(
          props.posts.slice(3).map((post) => <PostCard post={post} />)
        )}
      </PostsContainer>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  let posts: Post[] = [];
  try {
    const postsResponse = await axios(
      'https://sgarcia-portfolio-strapi.herokuapp.com/posts'
    );
    posts = postsResponse.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts,
    },
  };
};

export default Posts;
