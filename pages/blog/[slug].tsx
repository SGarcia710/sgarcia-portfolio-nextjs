import React, { useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import MarkdownRenderer from '../../components/MarkdownRenderers';
import { DateTime } from 'luxon';
import { COLORS, IMAGE_FORMATS } from '../../constants';
import { getResizedURL, readingTime } from '../../utils';
import {
  YTransition,
  YTRANSITION_CONFIG,
} from '../../components/AnimationsWrappers/YTransition';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled(motion.img)`
  width: 100%;
  height: 400px;
  object-fit: cover;
  @media (max-width: 425px) {
    height: 200px;
  }
`;

const Body = styled.article`
  max-width: 1000px;
  @media (max-width: 425px) {
    width: 100vw;
    padding: 0 1.5rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Header = styled.div`
  margin-bottom: 0.5rem;
  padding: 2rem 0;
  padding-top: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  max-width: 75%;
  line-height: 1.1;
  font-weight: 700;
  color: white;
  @media (max-width: 425px) {
    font-size: 1.8rem;
    margin: 0;
    line-height: 1.15;
    max-width: initial;
  }
`;

const Metadata = styled.div`
  padding: 1rem 0;
  margin: 1rem 0;
  font-size: 1rem;
  border-bottom: 3px solid ${COLORS.borderColor};
`;

const Sign = styled.p`
  color: ${COLORS.lightFontColor};
  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
  a {
    font-weight: bold;
    color: ${COLORS.fontColor};
  }
  span {
    text-transform: capitalize;
  }
`;
const Tags = styled.div`
  margin-top: 0.5rem;

  display: flex;
`;

const Tag = styled.a`
  margin-right: 8px;
  &:last-child {
    margin-right: 0;
  }
  background: ${COLORS.lightBackground};
  border-radius: 0.35rem;
  padding: 0.5rem 0.6rem;
  margin: 0.2rem;
  border-bottom: 0;
  /* cursor: pointer; */
  font-weight: 500;
  color: ${COLORS.fontColor};
  font-size: 0.9rem;
  white-space: nowrap;
  line-height: 1;
  transition: 0.2s;

  &:hover {
    background: ${COLORS.lightBackground};
    color: ${COLORS.headingColor};
  }
`;

const Description = styled.h3`
  font-size: 2rem;
  line-height: 1.5;
  max-width: 700px;

  color: ${COLORS.lightFontColor};
  font-weight: 300;
  margin-top: 2rem;

  @media (max-width: 425px) {
    font-size: 1.4rem;
  }
`;
const ReadingTime = styled.p`
  color: ${COLORS.lightFontColor};
  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
  a {
    font-weight: bold;
    color: ${COLORS.fontColor};
  }
  span {
    text-transform: capitalize;
  }
`;

const PostDetail = ({ post }: { post: Post }) => {
  const getImageURL = useCallback(
    () =>
      getResizedURL(post.featuredImage, {
        scale: true,
        quality: 'auto',
        width: 1440,
        to: IMAGE_FORMATS.webp,
      }),
    []
  );

  return (
    <YTransition {...YTRANSITION_CONFIG(0.2)}>
      <Container>
        <Image src={getImageURL()} />
        <Body>
          <Header>
            <Title>{post.title}</Title>

            <Metadata>
              <Sign>
                Por <a href="">Sebastián García</a> en{' '}
                <span>
                  {DateTime.fromISO(post.createdAt)
                    .setLocale('es')
                    .toFormat('LLLL dd, yyyy')
                    .toString()}
                </span>
              </Sign>
              <ReadingTime>
                {readingTime({
                  text: post.body,
                  lang: 'es',
                })}
              </ReadingTime>
              <Tags>
                {React.Children.toArray(
                  post.categories.map((category) => <Tag>{category.title}</Tag>)
                )}
              </Tags>
            </Metadata>
            <Description>{post.description}</Description>
          </Header>

          <MarkdownRenderer content={post.body} />
        </Body>
      </Container>
    </YTransition>
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
