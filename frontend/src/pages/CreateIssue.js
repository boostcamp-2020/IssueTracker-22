import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import ContentBox from '@components/ContentBox';
import GlobalStyle from '@assets/styles/GlobalStyle';
import Header from '@components/Header';
import IssueFormContainer from '@containers/issue-form/IssueFormContainer';
import userContext from '@lib/userContext';
import pathUri from '@constants/path';

const CreateIssue = () => {
  const user = useContext(userContext);

  if (!user) return <Redirect to={pathUri.home}/>;

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <ContentBox>
        <IssueFormContainer user={user} />
      </ContentBox>
    </>
  );
};

export default CreateIssue;
