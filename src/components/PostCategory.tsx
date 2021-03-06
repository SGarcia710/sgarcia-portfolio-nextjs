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
  hardware: {
    backgroundColor: '#6b6444',
    color: '#EBEBEB',
  },
  software: {
    backgroundColor: '#0c0aad',
    color: '#EBEBEB',
  },
  jamstack: {
    backgroundColor: '#ff0062',
    color: '#ffffff',
  },
  'mobile-development': {
    backgroundColor: '#fff',
    color: '#6b6444',
  },
  'web-development': {
    backgroundColor: '#19306e',
    color: '#ffffff',
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
  font-family: ${FONTS.plusJakarta.bold};
  margin-bottom: 10px;

  margin-right: 16px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 818px) {
  }
  @media (max-width: 425px),
    (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    font-size: 0.6rem;
  }
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
