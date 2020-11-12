import React from 'react';
import GlobalStyle from '@assets/styles/GlobalStyle';
import Header from '@components/Header';
import ContentBox from '@components/ContentBox';
import IssueContainer from '@containers/issue/IssueContainer';

const Issue = () => (
  <>
    <GlobalStyle/>
    <Header/>
    <ContentBox>
      <IssueContainer/>
    </ContentBox>
  </>
);

export default Issue;
