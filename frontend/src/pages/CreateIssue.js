import React from 'react';
import GlobalStyle from '../assets/styles/GlobalStyle';
import Header from '../components/Header';
import IssueForm from '../containers/issue-form/IssueForm';

const CreateIssue = () => (
  <>
    <GlobalStyle bg="#f6f8fa"/>
    <Header/>
    <IssueForm/>
  </>
);

export default CreateIssue;
