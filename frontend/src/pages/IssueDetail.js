import React from 'react';
import Header from '@components/Header';
import ContentBox from '@components/ContentBox';
import GlobalStyle from '@assets/styles/GlobalStyle';
import IssueDetailContainer from '@containers/detail/IssueDetailContainer';

const Issue = () => (
  <>
    <GlobalStyle/>
    <Header />
    <ContentBox>
      <IssueDetailContainer/>
    </ContentBox>
  </>
);

export default Issue;
