import { NextPage } from 'next';
import { useEffect } from 'react';
import kwesforms from 'kwesforms';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { COLORS, FONTS } from '@/constants';
import {
  YTransition,
  YTRANSITION_CONFIG,
} from '@/components/AnimationsWrappers/YTransition';
import CircleAvatar from '@/components/CircleAvatar';
import OpacityButton from '@/components/OpacityButton';

const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 425px),
    (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    padding: 0 20px;
  }
`;

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-size: 80px;
    max-width: 840px;
    line-height: 1.05;
    text-align: center;
    font-family: ${FONTS.plusJakarta.medium};
    margin-bottom: 48px;
    span {
      background-image: url('/images/DisplayLine.svg');
      background-repeat: no-repeat;
      background-position: 50% 100%;
      background-size: contain;
    }
    @media (max-width: 425px),
      (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
      font-size: 48px;
    }
  }
  h3 {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 48px;
    text-align: center;
    span {
      text-decoration: underline;
      font-family: ${FONTS.plusJakarta.medium};
      cursor: pointer;
    }

    @media (max-width: 425px),
      (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
      font-size: 24px;
      line-height: 1.4;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    height: 72px;
    margin-bottom: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 0px;
    border: none;
    border-bottom: 1px solid ${COLORS.fontColor};
    color: ${COLORS.fontColor};
    font-size: 24px;
    line-height: 40px;
    outline: none;
    font-family: ${FONTS.plusJakarta.medium};

    background-color: transparent;
    &::placeholder {
      font-family: ${FONTS.plusJakarta.medium};
    }
  }

  textarea {
    height: 200px;
  }
`;

const _YTransition = styled(YTransition)`
  width: 620px;

  @media (max-width: 425px),
    (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
    width: 100%;
  }
`;

const Contact: NextPage = () => {
  const { locale } = useRouter();

  useEffect(() => {
    kwesforms.init();
  }, [locale]);
  return (
    <Container>
      <YTransition {...YTRANSITION_CONFIG(0.2)}>
        <CircleAvatar image="images/Memoji.png" />
      </YTransition>
      <Headline>
        <YTransition {...YTRANSITION_CONFIG(0.3)}>
          <h1>
            <span>Hello!</span> I've been waiting for you.
          </h1>
        </YTransition>
        <YTransition {...YTRANSITION_CONFIG(0.4)}>
          <h3>
            Fill in the form or <span>Send us an email</span>
          </h3>
        </YTransition>
      </Headline>

      <_YTransition {...YTRANSITION_CONFIG(0.5)}>
        <Form
          action="https://kwes.io/api/foreign/forms/HlG58Pf8shtvBga5M6Aj"
          className="kwes-form"
          lang={locale}
          method="POST"
        >
          <input
            id="name"
            name="name"
            type="name"
            required
            placeholder="What's your name?"
          />
          <input
            id="email"
            name="email"
            required
            type="email"
            placeholder="Enter your Email"
          />
          <input
            id="subject"
            name="subject"
            required
            type="text"
            placeholder="Enter the subject"
          />
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            placeholder="Enter your message"
          />
          <OpacityButton type="submit" label="SUBMIT" />
        </Form>
      </_YTransition>
    </Container>
  );
};

export default Contact;
