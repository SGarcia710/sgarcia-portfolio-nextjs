import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import {
//   dark,
//   synthwave84,
//   dracula,
// } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230

import Code from './Code';
import { A, CODE, H2, H3, H4, IMG, P, TABLE, UL } from './HTMLTags';

const components = {
  code: ({ node, className, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return match ? (
      // <SyntaxHighlighter
      //   language={match[1]}
      //   PreTag="div"
      //   style={dracula}
      //   {...props}
      // />
      <Code
        codeString={props.children.shift().slice(0, -1)}
        language={match[1]}
      />
    ) : (
      <CODE className={className} {...props} />
    );
  },
  p: P,
  h2: H2,
  h3: H3,
  h4: H4,
  a: A,
  ul: UL,
  img: IMG,
  table: TABLE,
};

const MarkdownRenderer = (props: { content: string }) => {
  return (
    <ReactMarkdown
      children={props.content}
      // @ts-ignore
      components={components}
      remarkPlugins={[gfm]}
    />
  );
};

export default MarkdownRenderer;
