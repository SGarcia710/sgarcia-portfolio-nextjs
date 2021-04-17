import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FONTS, IMAGES } from '../../constants';
import { motion } from 'framer-motion';
import axios from 'axios';
import { DateTime } from 'luxon';

const Container = styled.div`
  width: 100%;
  min-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Featured Posts
const LastPosts = styled.div`
  max-width: 1024px;
  display: flex;
  height: 400px;
  margin-bottom: 30px;
`;

const FeaturedPost = styled.div`
  height: 100%;
  width: calc(100% / 3);
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
    z-index: 99;
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
  padding-bottom: 16px;
  padding-left: 12px;
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  line-height: 1.3;
  font-family: ${FONTS.plusJakarta.extraBold};
`;

// Posts
const PostsContainer = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
`;
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
const PostCategory = styled.p``;
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

const Posts = (props) => {
  console.log(props);

  return (
    <Container>
      <LastPosts>
        {React.Children.toArray(
          props.posts.slice(0, 3).map(({ id, featuredImage, title, slug }) => (
            <Link href={`/blog/${id}`}>
              <FeaturedPost>
                <Image layoutId={id} src={featuredImage} alt={title} />
                <InfoContainer>
                  <Title>{title}</Title>
                </InfoContainer>
              </FeaturedPost>
            </Link>
          ))
        )}
      </LastPosts>
      <PostsContainer>
        {React.Children.toArray(
          props.posts
            .slice(3)
            .map(
              ({
                id,
                description,
                featuredImage,
                type,
                title,
                slug,
                createdAt,
              }) => (
                <Link href={`/blog/${id}`}>
                  <Post>
                    <PostDetailRow>
                      <PostDate>
                        {DateTime.fromISO(createdAt).toLocaleString()}
                      </PostDate>
                      <PostCategory>{type}</PostCategory>
                    </PostDetailRow>
                    <PostImage layoutId={id} src={featuredImage} alt={title} />
                    <PostTitle>{title}</PostTitle>
                    <PostDescription>{description}</PostDescription>
                    <Link href={`/blog/${id}`}>
                      <GoToPostButton>Leer más</GoToPostButton>
                    </Link>
                  </Post>
                </Link>
              )
            )
        )}
      </PostsContainer>
    </Container>
  );
};

export async function getServerSideProps(context) {
  let posts = [];
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
}

export default Posts;
