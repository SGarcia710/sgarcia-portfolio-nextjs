import { FONTS } from '@/constants';
import React from 'react';
import styled from 'styled-components';

const COLORS = {
  default: {
    backgroundColor: '#ece8f9',
    color: '#9081b8',
  },
  react: {
    backgroundColor: '#ccf4ff',
    color: '#5FD3F3',
  },
  nextjs: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  gatsby: {
    backgroundColor: '#623194',
    color: '#fff',
  },
  javascript: {
    backgroundColor: '#F7D902',
    color: '#000',
  },
  'react-native': {
    backgroundColor: '#02D8FE',
    color: '#fff',
  },
  apple: {
    backgroundColor: '#fff',
    color: '#636363',
  },
  giveaway: {
    backgroundColor: '#D82247',
    color: '#F7E132',
  },
  'swift-ui': {
    backgroundColor: '#007BC2',
    color: '#000',
  },
  swift: {
    backgroundColor: '#FE7B34',
    color: '#fff',
  },
  css: {
    backgroundColor: '#1572B6',
    color: '#EBEBEB',
  },
  life: {
    backgroundColor: '#89CE18',
    color: '#EBEBEB',
  },
};

const getColors = (uid: string) => {
  return COLORS[uid];
};

const Container = styled.p`
  padding: 6px 12px;
  border-radius: 6px;
  width: fit-content;
  margin: 0;
  font-size: 0.7rem;
  /* background-color: #ece8f9;
  color: #9081b8; */
  font-family: ${FONTS.plusJakarta.bold};
  margin-bottom: 10px;
`;
const PostCategory = ({
  label,
  uid = 'default',
}: {
  label: string;
  uid?: string;
}) => {
  return <Container style={getColors(uid)}>{label}</Container>;
};

export default PostCategory;
