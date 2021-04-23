import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PostCard from '../../components/PostCard';
import { GetServerSideProps, NextPage } from 'next';
import Pagination from '../../components/Pagination';
import { useRouter } from 'next/router';
import {
  YTransition,
  YTRANSITION_CONFIG,
} from '../../components/AnimationsWrappers/YTransition';
import FeaturedPost from '@/components/FeaturedPost';
import { FiSearch } from 'react-icons/fi';
import { COLORS, FONTS } from '@/constants';

const Container = styled(YTransition)`
  width: 100%;
  min-height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 96px;
  position: relative;
`;
const Title = styled.h1`
  font-size: 3rem;
  font-family: ${FONTS.plusJakarta.extraBold};
  color: ${COLORS.headingColor};
`;
const Headline = styled.h3`
  color: rgba(255, 255, 255, 0.7);
  max-width: 18%;
  text-align: center;
  margin-bottom: 20px;
`;
const SearchContainer = styled.div`
  width: 385px;
  background-color: ${COLORS.lightBackground};
  padding: 10px 12px 10px 22px;
  display: flex;
  border-radius: 16px;
  justify-content: space-between;
`;
const SearchInput = styled.div`
  display: flex;
  align-items: center;
  svg {
    font-size: 1.2rem;
  }
  input {
    margin-left: 4px;
    font-size: 1rem;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${COLORS.darkFontColor};
    &::placeholder {
    }
  }
`;
const Memoji = styled.img`
  position: absolute;
  width: 150px;
  height: 150px;
  object-fit: contain;
  right: 26%;
  top: 10%;
`;
const SearchButton = styled.div`
  cursor: pointer;
  height: fit-content;
  padding: 3px 20px 3px 20px;
  border-radius: 12px;
  background-color: ${COLORS.headingColor};
  p {
    font-size: 0.85rem;
    color: ${COLORS.background};
  }
  transition: 0.3s;
  &:hover {
    filter: brightness(1.2);
  }
`;

const PostsContainer = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  @media (max-width: 812px) {
  }
`;
const ITEMS_PER_PAGE = 7;

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

  const isFirstPage = props.page === 1;

  return (
    <Container {...YTRANSITION_CONFIG(0.1)}>
      <Header>
        <Memoji alt="Search Memoji" src="/images/Memoji7.png" />
        <Title>Blog</Title>
        <Headline>
          lee los tutoriales, reseñas e historias que he publicado
        </Headline>
        <SearchContainer>
          <SearchInput>
            <FiSearch />
            <input placeholder="Buscar" type="text" />
          </SearchInput>
          <SearchButton>
            <p>Ir</p>
          </SearchButton>
        </SearchContainer>
      </Header>
      {!!isFirstPage && <FeaturedPost post={props.posts[0]} />}

      <PostsContainer>
        {React.Children.toArray(
          props.posts
            .slice(!!isFirstPage ? 1 : 0, 4)
            .map((post) => <PostCard post={post} />)
        )}
      </PostsContainer>
      <PostsContainer>
        {React.Children.toArray(
          props.posts
            .slice(!!isFirstPage ? 4 : 3, 7)
            .map((post) => <PostCard post={post} />)
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
