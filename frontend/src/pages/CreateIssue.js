import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import GlobalStyle from '../assets/styles/GlobalStyle';
import Header from '../components/Header';
import IssueFormContainer from '../containers/issue-form/IssueFormContainer';
import userContext from '../lib/userContext';
import pathUri from '../constants/path';

const CreateIssue = () => {
  const user = useContext(userContext);

  if (!user) return <Redirect to={pathUri.home}/>;

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <div style={{ padding: '0 3%', backgroundColor: 'white' }}>
        <IssueFormContainer user={user} />
      </div>
    </>
  );
};

export default CreateIssue;
