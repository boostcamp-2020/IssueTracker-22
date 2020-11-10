import React from 'react';
import GlobalStyle from '../assets/styles/GlobalStyle';
import Header from '../components/Header';
import IssueFormContainer from '../containers/issue-form/IssueFormContainer';

const CreateIssue = () => (
  <>
    <GlobalStyle/>
    <Header/>
    <div style={{ padding: '0 3%', backgroundColor: 'white' }}>
      <IssueFormContainer/>
    </div>
  </>
);

export default CreateIssue;
