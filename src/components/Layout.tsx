import React from 'react';
import Header from './Header';
import styled from 'styled-components';
import Footer from './Footer';

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #222323;
  display: flex;
  flex-direction: column;
`;
const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Container id="top">
      <Header />
      {props.children}
      <Footer />
    </Container>
  );
};

export default Layout;
