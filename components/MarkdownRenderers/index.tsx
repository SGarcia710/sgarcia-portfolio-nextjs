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
import Table from './Table';

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
