import React from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineMail } from 'react-icons/ai';
import { COLORS, FONTS } from '@/constants';
import NETWORKS from '@/constants/networks';

const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (max-width: 425px) {
    margin-top: 60px;
  }
`;

const MainContainer = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${COLORS.lightBackgroundHover};
  padding-top: 60px;
  padding-bottom: 56px;

  @media (max-width: 425px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (max-width: 818px) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Networks = styled.div`
  display: flex;

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 32px;
  }
`;

const Network = styled.a`
  color: white;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  svg {
    font-size: 20px;

    @media (max-width: 425px) {
      font-size: 24px;
    }
  }

  border-radius: calc(54px / 2);
  transition: 0.5s;
  &:hover {
    background-color: ${COLORS.lightBackgroundHover};
  }
`;

const Mail = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 0;
    padding: 0;

    font-size: 16px;
    letter-spacing: -0.03em;
    font-family: ${FONTS.plusJakarta.medium};
    color: white;
    @media (max-width: 425px) {
      font-size: 18px;
    }
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 18px;

  position: relative;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: 100%;
  }

  svg {
    font-size: 20px;
    position: absolute;
  }

  @media (max-width: 425px) {
    display: none;
  }
`;

const Foot = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.borderColor};
  div {
    width: 1024px;
    display: flex;
    justify-content: space-between;
    p {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin: 0;
      font-family: ${FONTS.plusJakarta.medium};
      a,
      img {
        margin: 0 4px;
      }
      a {
        text-decoration: underline;
        &:last-child {
          margin-right: 0;
        }
      }
      img {
        width: 18px;
        height: 18px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  @media (max-width: 425px) {
    display: none;
  }

  @media (max-width: 818px) {
    div {
      width: 100%;
      padding: 0 16px;
    }
  }
`;

const Footer = () => {
  const NetworksToShow = NETWORKS.filter((network) =>
    ['Twitter', 'Linkedin', 'Github', 'Twitch'].includes(network.name)
  );
  return (
    <Container>
      <MainContainer>
        <Networks>
          {React.Children.toArray(
            NetworksToShow.map((network) => (
              <Network href={network.link} target="__blank">
                {network.icon}
              </Network>
            ))
          )}
        </Networks>
        <Mail>
          <Icon>
            <img src="/images/MenuCircle.svg" alt="Mail" />
            <AiOutlineMail />
          </Icon>
          <p>contact@sebastiangarcia.dev</p>
        </Mail>
      </MainContainer>

      <Foot>
        <div>
          <p>
            <img src="/images/develop.svg" alt="Develop" />
            with
            <img src="/images/heart.svg" alt="Love" />
            in Colombia.
          </p>
          <p>
            Powered by{' '}
            <a href="https://strapi.io/" target="__blank">
              Strapi
            </a>{' '}
            and{' '}
            <a href="https://nextjs.org/" target="__blank">
              Nextjs
            </a>
            .
          </p>
        </div>
      </Foot>
    </Container>
  );
};

export default Footer;
