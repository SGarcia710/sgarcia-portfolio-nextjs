import { FONTS, IMAGE_FORMATS } from '@/constants';
import { getResizedURL } from '@/utils';
import React from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';

const Container = styled.div`
  display: flex;
`;
const Avatar = styled.img`
  width: 38px;
  height: 38px;
  object-fit: cover;
  border-radius: 10px;
`;
const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Author = styled.p`
  font-size: 0.75rem;
  color: white;
  font-family: ${FONTS.plusJakarta.bold};
  letter-spacing: 0.3px;
`;
const Date = styled.p`
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.6);
`;
const PostBy = ({ date }: { date: Date }) => {
  const _avatar = getResizedURL(
    'https://res.cloudinary.com/sgarciacloud/image/upload/v1614149890/avatar.jpg',
    {
      scale: true,
      quality: 100,
      width: 80,
      to: IMAGE_FORMATS.webp,
    }
  );
  return (
    <Container>
      <Avatar src={_avatar} alt="Sebastián García" />
      <Info>
        <Author>By : Sebastián</Author>
        <Date>{DateTime.fromISO(date).toRelative()}</Date>
      </Info>
    </Container>
  );
};

export default PostBy;
