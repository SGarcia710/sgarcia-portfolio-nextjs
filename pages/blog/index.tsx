import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import FeaturedPosts from '../../components/FeaturedPosts';
import PostCard from '../../components/PostCard';
import { GetServerSideProps, NextPage } from 'next';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/router';
import {
  YTransition,
  YTRANSITION_CONFIG,
} from '../../components/AnimationsWrappers/YTransition';

const Container = styled(YTransition)`
  width: 100%;
  min-height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 812px) {
    /* width: 100%; */
  }
`;

const PostsContainer = styled.div`
  width: 1024px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  justify-items: center;

  @media (max-width: 812px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 16px;
  }
`;
const ITEMS_PER_PAGE = 9;

const Posts: NextPage<{ posts: Post[]; page: number; count: number }> = (
  props
) => {
  const router = useRouter();

  const onNextPage = (newPage: number) => {
    router.push(`/blog?page=${newPage}`);
  };
  const onPrevPage = (newPage: number) => {
    router.push(`/blog?page=${newPage}`);
  };

  const postsToRender = props.posts.slice(props.page === 1 ? 3 : 0);

  return (
    <Container {...YTRANSITION_CONFIG(0.1)}>
      {props.page === 1 && <FeaturedPosts posts={props.posts.slice(0, 3)} />}
      <PostsContainer>
        {React.Children.toArray(
          postsToRender.map((post) => <PostCard post={post} />)
        )}
      </PostsContainer>

      <Pagination
        totalItems={props.count}
        page={props.page}
        onNext={onNextPage}
        onPrev={onPrevPage}
        itemsCount={props.posts.length}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  let page = parseInt(context.query.page as string);
  if (!page) {
    page = 1;
  }

  let posts: Post[] = [];
  let postsCount = 0;

  try {
    postsCount = (
      await axios('https://sgarcia-portfolio-strapi.herokuapp.com/posts/count')
    ).data;
    const postsResponse = await axios(
      `https://sgarcia-portfolio-strapi.herokuapp.com/posts?_limit=${ITEMS_PER_PAGE}&_start=${
        ITEMS_PER_PAGE * page - ITEMS_PER_PAGE
      }`
    );
    posts = postsResponse.data;
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      posts,
      page,
      count: postsCount,
    },
  };
};

export default Posts;
