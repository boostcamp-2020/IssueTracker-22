import React from 'react';
import GlobalStyle from '../assets/styles/GlobalStyle';
import Header from '../components/Header';
import IssueFormContainer from '../containers/issue-form/IssueFormContainer';

const CreateIssue = () => (
  <>
    <GlobalStyle bg="#f6f8fa"/>
    <Header/>
    <IssueFormContainer/>
  </>
);

export default CreateIssue;
