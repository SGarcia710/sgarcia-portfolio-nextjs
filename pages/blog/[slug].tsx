import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import {
//   dark,
//   synthwave84,
//   dracula,
// } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230

import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

export const Code = ({ codeString, language, ...props }) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="snippet-highlight" data-language={language}>
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-top: 2rem;
`;
export const Table = ({ children }) => (
  <TableWrapper>
    <table>{children}</table>
  </TableWrapper>
);

const components = {
  table: Table,

  code: ({ node, className, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      // <SyntaxHighlighter
      //   language={match[1]}
      //   PreTag="div"
      //   style={dracula}
      //   {...props}
      // />
      <Code codeString={props.children.shift()} language={match[1]} />
    ) : (
      <code className={className} {...props} />
    );
  },
  wrapper: ({ children }) => <>{children}</>,
};

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

const components2 = {};

const PostDetail = ({ post }: { post: Post }) => {
  console.log(post);
  return (
    <Container>
      <Image layoutId={post.id} src={post.featuredImage} />
      <ReactMarkdown
        children={post.body}
        components={components}
        remarkPlugins={[gfm]}
      />
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
  // if (!params.slug || params.slug.length < 0) {
  //   return { notFound: true };
  // }

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
