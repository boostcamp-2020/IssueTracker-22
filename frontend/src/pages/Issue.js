import React from 'react';
import GlobalStyle from '../assets/styles/GlobalStyle';
import Header from '../components/Header';
import IssueContainer from '../containers/issue/IssueContainer';

const Issue = () => (
  <>
    <GlobalStyle/>
    <Header/>
    <IssueContainer/>
  </>
);

export default Issue;
