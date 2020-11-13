import React from 'react';
import GlobalStyle from '@assets/styles/GlobalStyle';
import Header from '@components/Header';
import ContentBox from '@components/ContentBox';
import LabelContainer from '@containers/label/LabelContainer';

const Label = () => (
  <>
    <GlobalStyle/>
    <Header/>
    <ContentBox>
      <LabelContainer/>
    </ContentBox>
  </>
);

export default Label;
