import styled from 'styled-components';
import { COLORS, FONTS } from '../../constants';

export const P = styled.p``;
export const H4 = styled.h4`
  color: ${COLORS.mediumFontColor};
  font-weight: 600;
  font-size: 1.5rem;
  border-bottom: 3px solid ${COLORS.borderColor};
  margin: 0 0 1.5rem;
  line-height: 1.2;
  padding-bottom: 0.25rem;
  padding-top: 1rem;
  margin-top: 3rem;
  margin-bottom: 1rem;
  &:not(:first-child) {
    margin-top: 3rem;
  }
  @media (max-width: 425px) {
    font-size: 1.3rem;
    font-weight: 500;
  }
`;
export const H2 = styled.h2`
  color: ${COLORS.mediumFontColor};
  letter-spacing: -0.1rem;
  border-bottom: 3px solid ${COLORS.borderColor};
  font-size: 2rem;
  margin: 0 0 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${COLORS.headingColor};
  padding-bottom: 0.5rem;
  margin-top: 3rem;
  padding-top: 1rem;
  -webkit-font-smoothing: subpixel-antialiased;
  &:not(:first-child) {
    margin-top: 3rem;
  }
  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
`;
export const H3 = styled.h3`
  color: ${COLORS.mediumFontColor};
  -webkit-font-smoothing: antialiased;
  margin: 0 0 1.5rem;
  margin-bottom: 1rem;
  text-decoration: underline;
  line-height: 1.2;
  font-size: 1.8rem;
  font-weight: 600;
  padding-top: 1rem;
  margin-top: 3rem;

  &:not(:first-child) {
    margin-top: 3rem;
  }

  @media (max-width: 425px) {
    font-size: 1.5rem;
  }
`;
export const A = styled.a`
  color: ${COLORS.linkColor};
  text-decoration: none;
  font-weight: 700;
  border-color: transparent;
  transition: 0.1s;
  &:hover {
    color: white;
    border-bottom: 3px solid #96b4f9;
    border-color: ${COLORS.linkColor};
  }
`;
export const UL = styled.ul`
  margin: 0 0 1.5rem;
  padding: 0 2rem;
  padding-bottom: 0.3rem;
  li {
    padding-bottom: 0.3rem;
    display: list-item;
    text-align: -webkit-match-parent;
    list-style-type: disc;
  }
`;
export const CODE = styled.code`
  background: ${COLORS.lightBackground};
  color: ${COLORS.darkFontColor};
  box-shadow: none;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 5px;
  border-radius: 0.35rem;

  -webkit-font-smoothing: subpixel-antialiased;
  text-align: left;
  white-space: pre-wrap;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  font-weight: 400;
  line-height: 1.7;
  tab-size: 2;
  hyphens: none;
  background-color: ${COLORS.codeBackgroundColor};
`;
export const IMG = styled.img`
  width: 100%;
`;
export const TABLE = styled.table`
  display: block;
  border-collapse: separate;
  border-spacing: 0;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border: 1px solid #111;
  font-size: 1.3rem;
  margin: 0 0 1.5rem;
  text-indent: initial;
  thead {
    white-space: normal;
  }
  tr {
  }
  th {
    border-bottom: 2px solid ${COLORS.border};
    border-color: #111;
    text-align: left;
    padding: 0.75rem !important;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
    word-break: break-word;
  }
  tbody {
  }
  tr {
    &:nth-child(odd) {
      background-color: #222;
    }
    &:nth-child(2n) {
      background-color: ${COLORS.lightBackground};
    }
  }
  td {
    border-bottom: 1px solid ${COLORS.border};
    border-color: #111;
    text-align: left;
    padding: 0.75rem !important;
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
  }

  @media (max-width: 425px) {
    font-size: 1.05rem;
    tbody,
    thead {
      white-space: nowrap;
    }
  }
`;
export const BLOCKQUOTE = styled.blockquote`
  margin: 2rem 0;
  padding: 1rem;
  background: ${COLORS.blockquote};
  font-weight: 400;
  border-radius: 0.35rem;
  color: rgba(255, 255, 255, 0.9);
  border-left: 3px solid ${COLORS.linkColor};
  p {
    max-width: 100% !important;
    &:last-child {
      margin: 0;
    }
  }

  &:not(pre) > code[class*='language-'] {
    background: rgba(0, 0, 0, 0.1) !important;
  }

  @media (min-width: 800px) {
    padding: 2rem;
  }
`;
