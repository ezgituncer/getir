import React from 'react';
import MainWrapper from '../MainWrapper';
import Getir from '../../Getir/index';
import Layout from '../../Layout/index';
import styled from 'styled-components'
import Footer from '../../Layout/Footer/footer.js'

const Container = styled.div`
padding-top: 90px;
min-height: 100vh;
transition: padding-left 0.3s;
background:#FAFAFA
`



const Router = () => (
  <MainWrapper>
    <main>
      <div>
        <Layout />
        <Container>
         <Getir />
        </Container>
        <Footer />
      </div>
    </main>
  </MainWrapper>
);

export default Router;
